/**
 * Copyright (c) 2026 Genshiken Festival, Contributors, Artists and Volunteers.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { Button } from "@headlessui/react";

export default function CTA({
  className,
  children,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <Button
      className={`bg-brand-purple center rounded-3xl px-16 py-4 text-lg font-semibold text-white transition-all duration-200 data-active:bg-gray-500 data-hover:cursor-pointer data-hover:bg-gray-500 ${className ?? ""}`}
    >
      {children}
      <i className="bi bi-arrow-right ml-1 translate-y-5"></i>
    </Button>
  );
}
