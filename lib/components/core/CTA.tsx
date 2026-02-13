/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { Button } from "@headlessui/react";
import Link from "next/link";

export default function CTA({
  className,
  href,
  children,
}: Readonly<{ children: React.ReactNode; className?: string; href?: string }>) {
  return href ? (
    <Link
      href={href}
      className={`bg-brand-purple center group block w-full rounded-2xl px-16 py-4 text-center text-lg font-semibold text-white transition-all duration-200 hover:cursor-pointer hover:bg-gray-500 active:bg-gray-500 ${className ?? ""}`}
    >
      {children}
      <i className="bi bi-arrow-right ml-1 translate-y-5"></i>
    </Link>
  ) : (
    <Button
      className={`bg-brand-purple center group rounded-2xl px-16 py-4 text-lg font-semibold text-white transition-all duration-200 data-active:bg-gray-500 data-hover:cursor-pointer data-hover:bg-gray-500 ${className ?? ""}`}
    >
      {children}
      <i className="bi bi-arrow-right ml-1 translate-y-5"></i>
    </Button>
  );
}
