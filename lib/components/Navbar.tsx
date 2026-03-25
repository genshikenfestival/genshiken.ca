"use client";
/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { type NavigationType } from "@/config/navigation.config";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function renderItem(item: NavigationType) {
  return (
    <Link
      key={item.title}
      href={item.href ?? "#"}
      target={item.newWindow ? `_blank` : "_self"}
      className="text-brand-white hover:text-brand-purple focus:text-brand-purple rounded-2xl px-4 py-2 transition-colors hover:bg-white focus:bg-white"
    >
      {item.title}
    </Link>
  );
}

export default function Navbar({ items }: { items: NavigationType[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-brand-purple/90 sticky top-0 z-100 m-auto flex h-16 flex-col justify-end pb-10 backdrop-blur-lg md:flex-row md:justify-center md:bg-transparent md:pb-0 md:backdrop-blur-none`}
    >
      <div
        className={`md:bg-brand-purple/90 transition-all md:backdrop-blur-lg ${scrolled ? "w-full rounded-b-2xl xl:w-[80%] 2xl:w-[50%]" : "w-[100%] rounded-b-none"} px-4`}
      >
        <ul
          className={`flex h-full ${scrolled ? "translate-x-0" : "lg:translate-x-24"} flex-col items-center justify-center gap-8 lowercase transition-all md:flex-row`}
        >
          {items.map((menuItem) => (
            <li key={menuItem.title}>{renderItem(menuItem)}</li>
          ))}
          <li
            className={`text-brand-white ${scrolled ? "visible opacity-100" : "invisible opacity-0"} hidden transition-all duration-500 md:block`}
          >
            |
          </li>
          <li
            className={`${scrolled ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-500`}
          >
            <Link
              href={""}
              className="hover:text-brand-white text-brand-purple hover:bg-brand-purple focus:bg-brand-purple focus:text-brand-white bg-brand-white rounded-2xl px-4 py-2 transition-colors hover:border focus:border"
            >
              Buy Tickets
              <i className="bi bi-arrow-right ml-1"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
