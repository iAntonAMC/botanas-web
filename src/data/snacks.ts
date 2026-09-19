export interface Snack {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
}

export const snacks: Snack[] = [
  {
    id: "mix-fiesta",
    name: "Mix Fiesta",
    price: 85,
    category: "Especial",
    badge: "Más Vendido",
    description:
      "La combinación perfecta de cacahuates, churritos y gomitas con mucho chilito.",
    ingredients: [
      "Cacahuates",
      "Churros de maíz",
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
      "Papas fritas artesanales con un toque secreto de chile y limón.",
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
      "Gomitas cubiertas con nuestro chamoy casero especial y chilito piquín.",
    ingredients: ["Gomitas", "Chamoy", "Chile seco", "Azúcar", "Sal"],
    image: "/images/snacks/gomitas-chamoy.webp",
  },
];
