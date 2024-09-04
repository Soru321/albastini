import { StaticImageData } from 'next/image';

import product1Image from '@/../public/images/other/product-1.webp';
import product2Image from '@/../public/images/other/product-2.webp';
import product3Image from '@/../public/images/other/product-3.webp';
import product4Image from '@/../public/images/other/product-4.webp';
import product5Image from '@/../public/images/other/product-5.webp';
import product6Image from '@/../public/images/other/product-6.webp';
import product7Image from '@/../public/images/other/product-7.webp';
import product8Image from '@/../public/images/other/product-8.webp';
import product9Image from '@/../public/images/other/product-9.webp';

export type Product = {
  id: string;
  title: string;
  price: number;
  rating: { value: number; people: number };
  image: StaticImageData;
};

export const getProducts: Product[] = [
  {
    id: "1",
    title: "T-Shirt 001",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product1Image,
  },
  {
    id: "2",
    title: "T-Shirt 002",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product2Image,
  },
  {
    id: "3",
    title: "T-Shirt 003",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product3Image,
  },
  {
    id: "4",
    title: "T-Shirt 004",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product4Image,
  },
  {
    id: "5",
    title: "T-Shirt 005",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product5Image,
  },
  {
    id: "6",
    title: "Card 001",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product6Image,
  },
  {
    id: "7",
    title: "Card 002",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product7Image,
  },
  {
    id: "8",
    title: "Card 003",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product8Image,
  },
  {
    id: "9",
    title: "Card 004",
    price: 10,
    rating: { value: 4, people: 15 },
    image: product9Image,
  },
];
