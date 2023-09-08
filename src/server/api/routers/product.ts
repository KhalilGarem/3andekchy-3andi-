import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { createProductSchema } from "~/validation/createProductSchema";
import { editProductSchema } from "~/validation/editProductShcema";

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
          price: input.price,
          quantity: input.quantity,
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
        id: z.string().cuid(),
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
  // Get all products of a user query
  getProductsByUser: protectedProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany({
      where: {
        owner: {
          id: ctx.session.user.id,
        },
      },
      include: {
        image: true,
        owner: true,
      },
    });
    return products;
  }),
  // Delete a product mutation
  deleteProduct: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findFirst({
        where: {
          id: input.id,
        },
      });
      if (!product) {
        throw new Error("Product not found");
      }
      if (product.userId !== ctx.session.user.id) {
        throw new Error("You are not the owner of this product");
      }
      const deletedProduct = await ctx.prisma.product.delete({
        where: {
          id: input.id,
        },
      });
      return deletedProduct;
    }),
  // Edit a product mutation
  editProduct: protectedProcedure
    .input(editProductSchema)
    .mutation(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findFirst({
        where: {
          id: input.id,
        },
      });
      if (!product) {
        throw new Error("Product not found");
      }
      if (product.userId !== ctx.session.user.id) {
        throw new Error("You are not the owner of this product");
      }
      const editedProduct = await ctx.prisma.product.update({
        where: {
          id: input.id,
        },
        data: {
          ...input,
        },
      });
      return editedProduct;
    }),
});
