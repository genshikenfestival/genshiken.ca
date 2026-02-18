/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { Button as HeadlessButton } from "@headlessui/react";
import Link from "next/link";
import type { HTMLAttributeAnchorTarget } from "react";

export default function Button({
  className,
  href,
  target,
  children,
  showIcon,
  isGhost,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  showIcon?: string;
  isGhost?: boolean;
}>) {
  return href ? (
    <Link
      href={href}
      target={target}
      className={`bg-brand-purple center group block w-full rounded-2xl py-4 text-center text-lg text-white transition-all duration-200 hover:cursor-pointer hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-500 lg:px-16 ${className ?? ""} ${isGhost ? "border-brand-purple !text-brand-purple focus:!bg-brand-purple hover:!bg-brand-purple border-2 !bg-transparent hover:!text-white focus:!text-white" : ""}`}
    >
      {children}
      {showIcon ? (
        <i className={`bi bi-${showIcon} ml-2 translate-y-5`}></i>
      ) : null}
    </Link>
  ) : (
    <HeadlessButton
      className={`bg-brand-purple center group rounded-2xl px-16 py-4 text-lg text-white transition-all duration-200 data-active:bg-gray-500 data-focus:bg-gray-500 data-hover:cursor-pointer data-hover:bg-gray-500 ${className ?? ""}`}
    >
      {children}
      {showIcon ? (
        <i className={`bi bi-${showIcon} ml-2 translate-y-5`}></i>
      ) : null}
    </HeadlessButton>
  );
}
