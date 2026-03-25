/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { type NavigationType } from "@/config/navigation.config";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";

function renderItem(item: NavigationType) {
  return (
    <Link key={item.title} href={item.href ?? "#"}>
      {item.title}
    </Link>
  );
}

export default function Navbar({ items }: { items: NavigationType[] }) {
  return (
    <nav className="bg-brand-purple sticky top-0 left-[50%] z-100 m-auto h-16 w-[25vw] -translate-x-[50%]">
      <ul className="flex h-full items-center justify-center gap-8 lowercase">
        {items.map((menuItem) => (
          <li key={menuItem.title}>{renderItem(menuItem)}</li>
        ))}
      </ul>
    </nav>
  );
}
