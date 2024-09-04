import {
    homeRoute, latestNewsRoute, leaderboardRoute, shopRoute, supportRoute
} from '@/constants/routes';
import { NavLink } from '@/lib/types';

export const getFooterLinks: NavLink[] = [
  {
    id: "1",
    text: "Home",
    href: homeRoute,
  },
  {
    id: "2",
    text: "Shop",
    href: shopRoute,
  },
  {
    id: "3",
    text: "Leaderboard",
    href: leaderboardRoute,
  },
  {
    id: "4",
    text: "Latest News",
    href: latestNewsRoute,
  },
  {
    id: "5",
    text: "Support",
    href: supportRoute,
  },
];
