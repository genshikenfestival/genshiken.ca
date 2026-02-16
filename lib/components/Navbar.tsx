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
    <nav className="absolute top-0 z-20 m-auto h-16 w-[50vw] bg-transparent">
      {/* <Menu>
        <MenuItem>
          <a className="block data-focus:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuButton>My account</MenuButton>
        <MenuItems anchor="bottom">
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/settings">
              Settings
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/support">
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-focus:bg-blue-100" href="/license">
              License
            </a>
          </MenuItem>
        </MenuItems>
      </Menu> */}
    </nav>
  );
}
