export interface Menu {
  id: number;
  title: string;
  url?: string;
  children?: Menu[];
}

export const menuList: Menu[] = [
  { id: 1, title: "Single Menu", url: "/menu/single" },
  {
    id: 2,
    title: "Nested Menu",
    children: [
      { id: 3, title: "SubA", url: "/menu/subA" },
      {
        id: 4,
        title: "SubB",
        children: [{ id: 5, title: "SubBA", url: "/menu/subBA" }],
      },
    ],
  },
];
