/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 */

import Container from "@/lib/components/core/Container";
import Logo from "../../branding/Logo";
import Haru from "../../branding/Haru";
import Aki from "../../branding/Aki";
import CTA from "../../core/CTA";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[60vh] w-screen bg-brand-white px-32 flex items-center justify-between overflow-clip">
        <div id="hero__genshiken-info" className="flex flex-col gap-1.5">
          <h1 className="font-brand font-black text-8xl leading-28">
            Genshiken
            <br />
            Festival
          </h1>
          <h2 className="font-light tracking-[20%] uppercase text-4xl text-brand-purple">
            March 28, 2026
          </h2>
          <p className="font-medium text-xl uppercase mt-2">
            The Warehouse, Toronto, Ontario
          </p>
        </div>
        <div
          id="hero__genshiken-mascots"
          className="flex flex-row items-center"
        >
          <Haru
            className="max-h-[25%] translate-y-5/24 translate-x-5/8"
            isDecorative
          />
          <Aki
            className="max-h-[25%] translate-y-5/24 translate-x-2/8"
            isDecorative
          />
        </div>
      </div>
      <CTA className={"max-w-[50%] -translate-y-8"}>Buy Tickets!</CTA>
    </div>
  );
}
