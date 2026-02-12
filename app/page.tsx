/**
 * Copyright (c) 2026 Genshiken Festival, Contributors, Artists and Volunteers.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Hero from "@/lib/components/pages/home/Hero";
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "2026" });
export default function Home() {
  return (
    <main className="max-w-full flex-col items-center">
      <Hero />
      <div className="min-h-[80vh]"></div>
    </main>
  );
}
