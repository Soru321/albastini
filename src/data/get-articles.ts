import article1Image from '@/../public/images/other/article-1.webp';
import article2Image from '@/../public/images/other/article-2.webp';
import article3Image from '@/../public/images/other/article-3.webp';

export type Article = {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
};

export const getArticles: Article[] = [
  {
    id: "1",
    title: "New Update Released!",
    description: "Discover new quests and challenges in our latest update.",
    image: article1Image.src,
    date: "March 16, 2022",
  },
  {
    id: "2",
    title: "Championship Announced!",
    description: "Register now for a chance to win exclusive rewards.",
    image: article2Image.src,
    date: "March 16, 2022",
  },
  {
    id: "3",
    title: "Server Maintenance Alert",
    description: "Scheduled maintenance on June 28, 2024.",
    image: article3Image.src,
    date: "March 16, 2022",
  },
];
