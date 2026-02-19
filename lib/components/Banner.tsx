/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

export default function Banner({ text, href }: { text: string; href: string }) {
  return (
    <div className="bg-brand-purple relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-4.5">
      <div className="group flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <a
          className="text-brand-white text-sm font-semibold underline decoration-0 group-focus-within:decoration-2 group-hover:decoration-2"
          href={href}
        >
          {text} <i className="bi bi-arrow-right ml-1"></i>
        </a>
      </div>
    </div>
  );
}
