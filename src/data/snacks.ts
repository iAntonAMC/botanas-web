export type SnackCategory = "Especial" | "Limón" | "Dulce";

export interface Snack {
  id: string;
  name: string;
  price: number;
  category: SnackCategory;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  featured?: boolean;
}

export const snacks: Snack[] = [
  {
    id: "mix-fiesta",
    name: "Mix Fiesta",
    price: 85,
    category: "Especial",
    badge: "Más Vendido",
    featured: true,

    description:
      "La combinación perfecta de cacahuates, churritos y gomitas con mucho chilito.",

    ingredients: [
      "Cacahuates",
      "Churritos de maíz",
      "Chile en polvo",
      "Sal",
      "Limón deshidratado",
    ],

    image: "/images/snacks/mix-fiesta.webp",
  },

  {
    id: "papas-lokas",
    name: "Papas Lokas",
    price: 45,
    category: "Limón",

    description:
      "Papas fritas artesanales con un toque secreto de chile y limón. ¡Crujientes y adictivas!",

    ingredients: [
      "Papa natural",
      "Aceite vegetal",
      "Chile ancho",
      "Ácido cítrico",
      "Sal yodada",
    ],

    image: "/images/snacks/papas-lokas.webp",
  },

  {
    id: "gomitas-chamoy",
    name: "Gomitas con Chamoy",
    price: 55,
    category: "Dulce",

    description:
      "Dulces gomitas cubiertas con nuestro chamoy casero especial y una lluvia de chilito piquín.",

    ingredients: [
      "Gomitas de almidón",
      "Chamoy de la casa",
      "Mezcla de chiles secos",
      "Azúcar",
      "Sal",
    ],

    image: "/images/snacks/gomitas-chamoy.webp",
  },
];
