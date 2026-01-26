/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 */

import Container from "@/lib/components/Container";

export default function Hero() {
  return (
    <div className="h-[80vh] w-screen bg-amber-300">
      <Container isTopLevel>
        <div className="pt-24">
          <h1 className="font-bold text-7xl">
            Genshiken Festival <span className="font-extralight">2026</span>
          </h1>
        </div>
      </Container>
    </div>
  );
}
