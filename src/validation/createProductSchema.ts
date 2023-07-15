import { string, z } from "zod";

export const createProductSchema = z.object({
  type: string({
    required_error: "Veuillez choisir un type de produit.",
  }).refine((val) => {
    return val === "Habillment" || val === "Alimentaire";
  }, "Veuillez choisir un type de produit."),

  name: z
    .string({
      required_error: "Veuillez saisir un nom de produit.",
    })
    .min(3, "Le nom doit contenir au moins 3 caractères.")
    .max(50, "Le nom doit contenir au maximum 50 caractères."),
  description: z
    .string({
      required_error: "Veuillez fournir une description pour le produit.",
    })
    .min(20, "La description doit contenir au moins 20 caractères.")
    .max(1000, "La description doit contenir au maximum 1000 caractères."),
  price: z
    .number({
      required_error: "Veuillez fournir un prix pour le produit.",
      invalid_type_error: "Veuillez entrer un nombre pour le prix.",
    })
    .gte(0.1, "Le prix doit être supérieur ou égal à 0.1.")
    .lte(1000, "Le prix doit être inférieur ou égal à 1000."),
  quantity: z
    .number({
      required_error: "Veuillez fournir une quantité pour le produit.",
      invalid_type_error: "Veuillez entrer un nombre pour la quantité.",
    })
    .int()
    .positive("La quantité doit être supérieure à 0."),
  imageUrl: z.string(),
});

export type CreateProductInputType = z.infer<typeof createProductSchema>;
