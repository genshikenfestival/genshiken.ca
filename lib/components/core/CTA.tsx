/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 */

import { Button } from "@headlessui/react";

export default function CTA({
  className,
  children,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <Button
      className={` shadow-2xl
        rounded-3xl bg-brand-purple px-16 py-4 text-white
        data-active:bg-purple-800  data-hover:bg-purple-800 
        data-hover:cursor-pointer
        font-brand font-bold
        center
        data-hover:shadow-2xs
        ${className ?? ""}`}
    >
      {children}
      <i className="ml-2 bi bi-arrow-right"></i>
    </Button>
  );
}
