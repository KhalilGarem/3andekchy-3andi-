import { z } from "zod";

export const editProductSchema = z.object({
  id: z.string().cuid(),
  name: z
    .string({
      required_error: "Veuillez saisir un nom de produit.",
    })
    .min(3, "Le nom doit contenir au moins 3 caractères.")
    .max(50, "Le nom doit contenir au maximum 50 caractères.")
    .optional(),
  description: z
    .string({
      required_error: "Veuillez fournir une description pour le produit.",
    })
    .min(20, "La description doit contenir au moins 20 caractères.")
    .max(1000, "La description doit contenir au maximum 1000 caractères.")
    .optional(),
  price: z
    .number({
      required_error: "Veuillez fournir un prix pour le produit.",
      invalid_type_error: "Veuillez entrer un nombre pour le prix.",
    })
    .gte(0.1, "Le prix doit être supérieur ou égal à 0.1.")
    .lte(1000, "Le prix doit être inférieur ou égal à 1000.")
    .optional(),
  quantity: z
    .number({
      required_error: "Veuillez fournir une quantité pour le produit.",
      invalid_type_error: "Veuillez entrer un nombre pour la quantité.",
    })
    .int()
    .positive("La quantité doit être supérieure à 0.")
    .optional(),
});

export const editProductNameSchema = z.object({
  id: z.string().cuid(),
  name: z
    .string({
      required_error: "Veuillez saisir un nom de produit.",
    })
    .min(3, "Le nom doit contenir au moins 3 caractères.")
    .max(50, "Le nom doit contenir au maximum 50 caractères."),
});

export const editProductDescriptionSchema = z.object({
  id: z.string().cuid(),
  description: z
    .string({
      required_error: "Veuillez fournir une description pour le produit.",
    })
    .min(20, "La description doit contenir au moins 20 caractères.")
    .max(1000, "La description doit contenir au maximum 1000 caractères."),
});

export const editProductPriceSchema = z.object({
  id: z.string().cuid(),
  price: z
    .number({
      required_error: "Veuillez fournir un prix pour le produit.",
      invalid_type_error: "Veuillez entrer un nombre pour le prix.",
    })
    .gte(0.1, "Le prix doit être supérieur ou égal à 0.1.")
    .lte(1000, "Le prix doit être inférieur ou égal à 1000."),
});

export const editProductQuantitySchema = z.object({
  id: z.string().cuid(),
  quantity: z
    .number({
      required_error: "Veuillez fournir une quantité pour le produit.",
      invalid_type_error: "Veuillez entrer un nombre pour la quantité.",
    })
    .int()
    .positive("La quantité doit être supérieure à 0."),
});

export type EditProductInputType = z.infer<typeof editProductSchema>;
export type EditProductNameInputType = z.infer<typeof editProductNameSchema>;
export type EditProductDescriptionInputType = z.infer<
  typeof editProductDescriptionSchema
>;
export type EditProductPriceInputType = z.infer<typeof editProductPriceSchema>;
export type EditProductQuantityInputType = z.infer<
  typeof editProductQuantitySchema
>;
