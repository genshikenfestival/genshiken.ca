/**
 * Copyright (c) 2026 Genshiken Festival, Contributors, Artists and Volunteers.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import CTA from "@/lib/components/core/CTA";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-brand-white flex h-[75vh] w-screen flex-col items-center justify-between overflow-clip bg-[url('/assets/hero-bg.png')] bg-cover bg-no-repeat px-12 md:px-32 lg:flex-row">
        <div
          id="hero__genshiken-info"
          className="flex translate-y-8/12 flex-col md:translate-y-24 lg:translate-y-0"
        >
          <h1 className="font-brand lg:leading-auto text-7xl font-black xl:text-8xl">
            Genshiken
            <br />
            Festival
          </h1>
          <h2 className="text-brand-purple mt-4 font-light tracking-[20%] uppercase lg:text-2xl xl:text-4xl">
            March 28, 2026
          </h2>
          <p className="mt-2 font-medium uppercase lg:text-lg xl:text-xl">
            The Warehouse, Toronto, Ontario
          </p>
          <div className="mt-12 hidden lg:block xl:w-3/4">
            <CTA
              className={
                "shadow-brand-purple/50 min-w-full shadow-xl data-hover:shadow-none"
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
          <Image
            className={
              "translate-y-10/24 md:translate-y-4/24 2xl:max-w-25 2xl:translate-y-4/24"
            }
            src={"/assets/mascot/haru-and-aki-hero.png"}
            alt=""
            width={1722}
            height={2868}
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
