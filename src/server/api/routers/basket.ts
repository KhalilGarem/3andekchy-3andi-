import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { addProductToBasketSchema } from "~/validation/basketSchema";

export const basketRouter = createTRPCRouter({
  // Get the basket of the user
  getBasket: protectedProcedure.query(async ({ ctx }) => {
    const basket = await ctx.prisma.basket.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        basketItems: {
          include: {
            product: {
              include: {
                image: true,
              },
            },
          },
        },
      },
    });
    return basket;
  }),

  // Add a product to the basket mutation
  addProductToBasket: protectedProcedure
    .input(addProductToBasketSchema)
    .mutation(async ({ ctx, input }) => {
      const basket = await ctx.prisma.basket.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
      });
      // If the user has a no basket
      if (!basket) {
        const newBasket = await ctx.prisma.basket.create({
          data: {
            user: {
              connect: {
                id: ctx.session.user.id,
              },
            },
          },
        });
        // add the product to the new basket
        const newBasketItem = await ctx.prisma.basketItem.create({
          data: {
            basket: {
              connect: {
                id: newBasket.id,
              },
            },
            product: {
              connect: {
                id: input.productId,
              },
            },
            quantity: input.quantity,
          },
        });
        return newBasketItem;
      }
      // add the product to the new basket
      const newBasketItem = await ctx.prisma.basketItem.create({
        data: {
          basket: {
            connect: {
              id: basket.id,
            },
          },
          product: {
            connect: {
              id: input.productId,
            },
          },
          quantity: input.quantity,
        },
      });
      return newBasketItem;
    }),
  increaseBasketItemQuantity: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      const basketItem = await ctx.prisma.basketItem.findFirst({
        include: {
          basket: {
            select: {
              userId: true,
            },
          },
        },
        where: {
          id: input.id,
        },
      });
      if (!basketItem) {
        throw new Error("Basket item not found");
      }
      if (basketItem.basket.userId !== ctx.session.user.id) {
        throw new Error("You cannot edit this basket item");
      }
      const updatedBasketItem = await ctx.prisma.basketItem.update({
        where: {
          id: input.id,
        },
        data: {
          quantity: basketItem.quantity + 1,
        },
      });
      return updatedBasketItem;
    }),
  decreaseBasketItemQuantity: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      const basketItem = await ctx.prisma.basketItem.findFirst({
        include: {
          basket: {
            select: {
              userId: true,
            },
          },
        },
        where: {
          id: input.id,
        },
      });
      if (!basketItem) {
        throw new Error("Basket item not found");
      }
      if (basketItem.basket.userId !== ctx.session.user.id) {
        throw new Error("You cannot edit this basket item");
      }
      if (basketItem.quantity === 1) {
        throw new Error("Quantity cannot be less than 1");
      }
      const updatedBasketItem = await ctx.prisma.basketItem.update({
        where: {
          id: input.id,
        },
        data: {
          quantity: basketItem.quantity - 1,
        },
      });
      return updatedBasketItem;
    }),
  deleteBasketItem: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      const basketItem = await ctx.prisma.basketItem.findFirst({
        include: {
          basket: {
            select: {
              userId: true,
            },
          },
        },
        where: {
          id: input.id,
        },
      });
      if (!basketItem) {
        throw new Error("Basket item not found");
      }
      if (basketItem.basket.userId !== ctx.session.user.id) {
        throw new Error("You cannot delete this basket item");
      }
      const deletedBasketItem = await ctx.prisma.basketItem.delete({
        where: {
          id: input.id,
        },
      });
      return deletedBasketItem;
    }),
});
