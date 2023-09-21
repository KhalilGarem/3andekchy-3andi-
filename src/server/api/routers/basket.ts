import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import {
  addProductToBasketSchema,
  orderBasketSchema,
} from "~/validation/basketSchema";

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
  orderBasket: protectedProcedure
    .input(orderBasketSchema)
    .mutation(async ({ ctx, input }) => {
      const basket = await ctx.prisma.basket.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
        include: {
          basketItems: {
            include: {
              product: true,
            },
          },
        },
      });
      if (!basket) {
        throw new Error("Basket not found");
      }
      if (basket.userId !== ctx.session.user.id) {
        throw new Error("You cannot order this basket");
      }
      basket.basketItems.forEach(
        async (basketItem) =>
          await ctx.prisma.order.create({
            data: {
              user: {
                connect: {
                  id: ctx.session.user.id,
                },
              },
              product: {
                connect: {
                  id: basketItem.product.id,
                },
              },
              quantity: basketItem.quantity,
              phone: input.phone,
            },
          })
      );

      const deletedBasket = await ctx.prisma.basket.delete({
        where: {
          id: basket.id,
        },
      });
      return deletedBasket;
    }),
  getUserOrders: protectedProcedure.query(async ({ ctx }) => {
    const orders = await ctx.prisma.order.findMany({
      where: {
        product: {
          userId: ctx.session.user.id,
        },
      },
      include: {
        product: {
          include: {
            image: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    return orders;
  }),
  deleteOrder: protectedProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      const order = await ctx.prisma.order.findFirst({
        where: {
          id: input.id,
        },
        include: {
          product: {
            select: {
              userId: true,
            },
          },
        },
      });
      if (!order) {
        throw new Error("Order not found");
      }
      if (order.product.userId !== ctx.session.user.id) {
        throw new Error("You cannot delete this order");
      }
      const deletedOrder = await ctx.prisma.order.delete({
        where: {
          id: input.id,
        },
      });
      return deletedOrder;
    }),
});
