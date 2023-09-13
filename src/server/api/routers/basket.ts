import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { addProductToBasketSchema } from "~/validation/basketSchema";

export const basketRouter = createTRPCRouter({
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
});
