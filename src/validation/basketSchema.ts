import { z } from "zod";

export const addProductToBasketSchema = z.object({
  productId: z.string({
    required_error: "Veuillez fournir un id de produit.",
  }),
  quantity: z
    .number({
      required_error: "Veuillez fournir une quantité pour le produit.",
      invalid_type_error: "Veuillez entrer un nombre pour la quantité.",
    })
    .int()
    .positive("La quantité doit être supérieure à 0."),
});

export type AddProductToBasketInputType = z.infer<
  typeof addProductToBasketSchema
>;
