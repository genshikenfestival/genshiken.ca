/**
 *Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import CTA from "@/lib/components/core/CTA";
import Image from "next/image";
import Container from "@/lib/components/core/Container";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="bg-brand-white overflow-clip bg-[url('/assets/hero-bg.png')] bg-cover bg-no-repeat lg:w-full">
        <Container
          extended
          className="relative box-content flex h-[80vh] flex-col items-center justify-center md:box-border md:justify-between lg:flex-row"
        >
          <div
            id="hero__genshiken-info"
            className="flex flex-1 flex-col justify-center pt-24 lg:mt-0 lg:translate-y-0 lg:pt-0"
          >
            <h1 className="font-brand lg:leading-auto text-center text-6xl font-black md:text-8xl lg:text-left xl:text-8xl">
              Genshiken Festival
            </h1>
            <h2 className="text-brand-purple mt-4 text-center text-xl font-light tracking-[20%] uppercase lg:text-left lg:text-2xl xl:text-4xl">
              March 28, 2026
            </h2>
            <p className="mt-4 text-center text-xs font-medium uppercase lg:text-left lg:text-lg xl:text-xl">
              The Warehouse Venue, Toronto, Ontario
            </p>
            <div className="xl:w-10.5/12 mt-12 hidden lg:block">
              <CTA
                href="/tickets"
                className={
                  "shadow-brand-purple/50 min-w-full shadow-xl hover:shadow-none"
                }
              >
                Buy Tickets Now!
              </CTA>
            </div>
          </div>
          <div
            id="hero__genshiken-mascots--desktop"
            className="flex w-[75%] flex-row items-center"
          >
            <Image
              quality={100}
              preload
              className={"flex self-center justify-self-center lg:hidden"}
              src={"/assets/mascot/haru-and-aki-hero-mobile.png"}
              alt=""
              width={1722}
              height={2868}
            />
            <Image
              quality={100}
              preload
              className={
                "hidden lg:block lg:translate-y-4/24 2xl:translate-y-4/24"
              }
              src={"/assets/mascot/haru-and-aki-hero.png"}
              alt=""
              width={1722}
              height={2868}
            />
          </div>
        </Container>
      </div>
      <CTA
        href="/tickets"
        className={
          "shadow-brand-purple/50 z-10 max-w-[75%] -translate-y-8 shadow-2xl hover:shadow-2xs lg:hidden"
        }
      >
        Buy Tickets Now!
      </CTA>
    </div>
  );
}
