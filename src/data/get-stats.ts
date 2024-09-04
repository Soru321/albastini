export type Stat = {
  id: string;
  title: string;
  stat: string;
};

export const getStats: Stat[] = [
  {
    id: "1",
    title: "Active Players",
    stat: "15K",
  },
  {
    id: "2",
    title: "In-Game Purchases",
    stat: "20K",
  },
  {
    id: "3",
    title: "Total Downloads",
    stat: "25K",
  },
];
