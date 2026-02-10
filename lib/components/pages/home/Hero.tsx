/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 */

import Haru from "../../branding/Haru";
import Aki from "../../branding/Aki";
import CTA from "../../core/CTA";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[75vh] md:h-[60vh] w-screen bg-brand-white px-12 md:px-32 flex lg:flex-row flex-col items-center justify-between overflow-clip">
        <div
          id="hero__genshiken-info"
          className="flex flex-col lg:translate-y-0 translate-y-[150%] md:translate-y-24"
        >
          <h1 className="font-brand font-black xl:text-8xl lg:leading-auto lg:text-7xl md:text-8xl text-6xl">
            Genshiken
            <br />
            Festival
          </h1>
          <h2 className="font-light tracking-[20%] uppercase xl:text-4xl lg:text-2xl  text-brand-purple mt-4">
            March 28, 2026
          </h2>
          <p className="font-medium xl:text-xl lg:text-lg uppercase mt-2">
            The Warehouse, Toronto, Ontario
          </p>
          <div className="xl:w-3/4 mt-12 hidden lg:block">
            <CTA
              className={
                "min-w-full shadow-xl shadow-brand-purple/50 data-hover:shadow-none"
              }
            >
              Buy Tickets Now!
            </CTA>
          </div>
        </div>
        <div
          id="hero__genshiken-mascots"
          className="flex flex-row items-center"
        >
          <Haru
            className="xl:translate-y-5/24 xl:translate-x-24 2xl:min-w-150 xl:min-w-100 lg:min-w-75 lg:translate-x-0 lg:translate-y-2/24 md:max-w-50 max-w-32 md:translate-y-12 translate-y-24"
            isDecorative
          />
          <Aki
            className="2xl:min-w-150 xl:min-w-100  xl:translate-y-5/24 lg:min-w-75 lg:-translate-x-12 lg:translate-y-2/24 md:max-w-50 md:translate-y-12 max-w-32 translate-y-24"
            isDecorative
          />
        </div>
      </div>
      <CTA
        className={"-translate-y-8 shadow-2xl data-hover:shadow-2xs lg:hidden"}
      >
        Buy Tickets Now!
      </CTA>
    </div>
  );
}
