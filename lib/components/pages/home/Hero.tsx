/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 */

import Container from "@/lib/components/core/Container";
import Logo from "../../branding/Logo";

export default function Hero() {
  return (
    <div className="h-[40vh] w-screen bg-brand-white">
      <Container>
        <div className="pt-24 flex w-full items-center justify-center">
          <Logo
            className="xl:max-w-1/4 lg:max-w-2/3"
            type="/assets/logos/gf-logo-condensed-outline.png"
          />
          {/* <h1 className="font-bold text-7xl" hidden>
            Genshiken Festival <span className="font-extralight">2026</span>
          </h1> */}
        </div>
      </Container>
    </div>
  );
}
