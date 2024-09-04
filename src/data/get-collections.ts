export type Collection = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const getCollections: Collection[] = [
  {
    id: "1",
    title: "Exclusive In-Game Items",
    description:
      "Enhance your gameplay with powerful weapons, unique armor sets, and special abilities. Discover exclusive in-game items that give you the edge in your adventures.",
    image: "/images/other/collection-1.webp",
  },
  {
    id: "2",
    title: "Merchandise",
    description:
      "Show off your love for Albastini with our range of merchandise. From t-shirts and hoodies to posters and accessories, find the perfect gear to represent your...",
    image: "/images/other/collection-2.webp",
  },
  {
    id: "3",
    title: "Limited Edition Collectibles",
    description:
      "Don’t miss out on our limited edition collectibles! These rare items are perfect for any Albastini fan and are available for a limited time only.",
    image: "/images/other/collection-3.webp",
  },
];
