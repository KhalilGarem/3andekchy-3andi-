import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { createProductSchema } from "~/validation/createProductSchema";

export const productRouter = createTRPCRouter({
  // Create a product mutation
  createProduct: protectedProcedure
    .input(createProductSchema)
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.create({
        data: {
          type: input.type,
          name: input.name,
          description: input.description,
          price: Number(input.price),
          quantity: Number(input.quantity),
          image: {
            create: {
              url: input.imageUrl,
            },
          },
          owner: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
      return product;
    }),
  // Get all products query
  getProducts: publicProcedure
    .input(
      z.object({
        type: z.enum(["Habillment", "Alimentaire"]),
      })
    )
    .query(async ({ ctx, input }) => {
      const products = await ctx.prisma.product.findMany({
        include: {
          image: true,
          owner: true,
        },
        where: {
          type: input.type,
        },
      });
      return products;
    }),
  // Get a product by id query
  getProductById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findUnique({
        where: {
          id: input.id,
        },
        include: {
          image: true,
          owner: true,
        },
      });
      return product;
    }),
});
