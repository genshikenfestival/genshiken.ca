/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 */

import Hero from "@/lib/components/pages/home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-full">
      <Hero />
      <div className="min-h-[80vh]"></div>
    </main>
  );
}
