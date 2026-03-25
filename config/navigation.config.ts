/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

export const ALL_NAVIGATION: NavigationType[] = [
  {
    title: "Event Guide",
    href: "/assets/2026/Genshiken_2026_Guide.pdf",
  },
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
    title: "Official Policies",
    href: "/assets/2026/Genshiken_2026_Policies.pdf",
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
