export type SnackCategory = "Cacahuates" | "Gomitas" | "Caramelos";

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
    id: "cacahuates-japoneses",
    name: "Cacahuates Japoneses",
    price: 85,
    category: "Cacahuates",
    badge: "Más Vendido",
    featured: true,

    description:
      "Cacahuates japoneses crujientes con una cubierta sazonada y mucho sabor.",

    ingredients: [
      "Cacahuates",
      "Cacahuates",
      "Harina de trigo",
      "Salsa de soya",
      "Aceite vegetal",
      "Sal",
    ],

    image: "/images/snacks/cacahuates-japoneses.webp",
  },

  {
    id: "cacahuates-hotnut",
    name: "Cacahuates HotNut",
    price: 45,
    category: "Cacahuates",

    description:
      "Cacahuates crujientes con un toque secreto de chile y limón. ¡Crujientes y adictivas!",

    ingredients: [
      "Cacahuates",
      "Aceite vegetal",
      "Chile ancho",
      "Ácido cítrico",
      "Sal yodada",
    ],

    image: "/images/snacks/cacahuates-hotnut.webp",
  },

  {
    id: "gomitas-viborita",
    name: "Gomitas Viborita",
    price: 55,
    category: "Gomitas",

    description:
      "Dulces gomitas cubiertas con nuestro chamoy casero especial y una lluvia de chilito piquín.",

    ingredients: [
      "Gomitas de almidón",
      "Chamoy de la casa",
      "Mezcla de chiles secos",
      "Azúcar",
      "Sal",
    ],

    image: "/images/snacks/viboritas.webp",
  },

  {
    id: "gomitas-pandita",
    name: "Gomitas Pandita",
    price: 55,
    category: "Gomitas",

    description:
      "Tiernas y deliciosas gomitas con forma de pandita, perfectas para disfrutar a cualquier hora.",

    ingredients: [
      "Gomitas de almidón",
      "Azúcar",
      "Jarabe de glucosa",
      "Ácido cítrico",
      "Colorantes artificiales",
    ],

    image: "/images/snacks/gomitas-pandita.webp",
  },

  {
    id: "gomitas-aros-fruta",
    name: "Gomitas Aros Fruta",
    price: 55,
    category: "Gomitas",

    description:
      "Coloridos aros de gomita con deliciosos sabores frutales y una textura suave y masticable.",

    ingredients: [
      "Gomitas de almidón",
      "Azúcar",
      "Jarabe de glucosa",
      "Ácido cítrico",
      "Sabores frutales",
    ],

    image: "/images/snacks/aros-fruta.webp",
  },

  {
    id: "cacahuates-chile-ajo",
    name: "Cacahuates con Chile y Ajo",
    price: 50,
    category: "Cacahuates",

    description:
      "Cacahuates crujientes sazonados con chile y ajo para un sabor intenso y delicioso.",

    ingredients: ["Cacahuates", "Aceite vegetal", "Chile seco", "Ajo", "Sal"],

    image: "/images/snacks/cacahuates-chile-ajo.webp",
  },
];
