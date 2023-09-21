import { z } from "zod";

// Phone Number Regex Validation
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const orderBasketSchema = z.object({
  basketId: z
    .string({
      required_error: "Veuillez fournir un id de produit.",
    })
    .cuid(),
  phone: z
    .string()
    .regex(
      phoneRegex,
      "Veuillez saisir un numéro de téléphone valide. Utilisez uniquement des chiffres."
    ),
});

export const addProductToBasketSchema = z.object({
  productId: z
    .string({
      required_error: "Veuillez fournir un id de produit.",
    })
    .cuid(),
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

export type OrderBasketInputType = z.infer<typeof orderBasketSchema>;
