/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

export const ALL_NAVIGATION: NavigationType[] = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Events",
    href: "/#events",
  },
  {
    title: "Venue",
    href: "/#venue",
  },
  {
    title: "Policies",
    children: [
      {
        href: "/policies/artists",
        title: "Artists Alley Policy",
      },
      {
        href: "/policies/safety",
        title: "Safety and Anti-Harassment",
      },
    ],
  },
];

export type NavigationType = {
  title: string;
  href?: string;
  children?: NavigationItemType[];
};

export type NavigationItemType = {
  title: string;
  href: string;
};
