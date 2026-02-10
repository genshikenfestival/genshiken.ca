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
      className={` transition-all duration-200
        rounded-3xl bg-brand-purple px-16 py-4 text-white
        data-active:bg-gray-500 data-hover:bg-gray-500 
        data-hover:cursor-pointer
        font-semibold
        text-lg
        center  
        ${className ?? ""}`}
    >
      {children}
      <i className="ml-1 translate-y-5 bi bi-arrow-right"></i>
    </Button>
  );
}
