/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Callout from "@/lib/components/Callout";
import Button from "@/lib/components/core/Button";
import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import Paragraph from "@/lib/components/core/typography/Paragraph";
import Maps from "@/lib/components/Maps";
import Hero from "@/lib/components/pages/home/Hero";

import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "2026" });
export default function Home() {
  return (
    <main className="max-w-full flex-col items-center">
      <Hero />
      <Container className="mt-20 flex flex-col gap-12 lg:mt-24">
        <Callout title="What is Genshiken?" className="mb-8">
          Genshiken Festival is a one-day convention organized by a variety of
          Ontario University Anime Clubs and brought to you by some of the same
          organizers as Ākēdo Festival! The Festival features Artist Alleys,
          Maid Cafe, Performances, and more!
        </Callout>
        <section>
          <Heading level="h2">Events</Heading>
          <Paragraph>...Events go here</Paragraph>
        </section>
        <section className="flex flex-col gap-4 pb-12 lg:gap-12">
          <Heading level="h2">Venue and Location</Heading>

          <div className="flex flex-col-reverse gap-8 lg:flex-row">
            <div className="lg:hidden">
              <Button
                showIcon="box-arrow-in-up-right"
                className={"w-full"}
                target="_blank"
                href="https://maps.app.goo.gl/2vX7FnwUebHquWSC6"
              >
                Get Directions
              </Button>
            </div>
            <div className="lg:bg-brand-white relative flex flex-col justify-center rounded-2xl lg:flex-1 lg:p-8">
              <div className="flex flex-col gap-2 lg:-translate-y-8">
                {/* <p className="font-light tracking-[20%] uppercase opacity-80 lg:ml-1 lg:-translate-y-6 lg:text-xl">
                  March 28th, 2026 at
                </p> */}
                <p className="text-xl leading-relaxed font-bold lg:text-2xl">
                  <span className="text-brand-purple">
                    March 28, 2026 @ &nbsp;
                    <br className="hidden lg:block" />
                  </span>
                  The Warehouse Venue
                </p>
                <p className="italic lg:text-lg">
                  35 Carl Hall Rd #2, North York, ON M3K 2E2
                </p>
                <p className="text-sm font-light tracking-[5%] uppercase lg:text-base">
                  Located in Downsview Park
                </p>
              </div>
              <div className="absolute bottom-0 left-0 hidden min-w-full lg:block">
                <Button
                  showIcon="box-arrow-in-up-right"
                  className={"w-full rounded-t-none"}
                  target="_blank"
                  href="https://maps.app.goo.gl/2vX7FnwUebHquWSC6"
                >
                  Get Directions
                </Button>
              </div>
            </div>
            <Maps
              className={"lg:flex-2"}
              embedCode={
                "!1m18!1m12!1m3!1d6440.091444735843!2d-79.48130612202827!3d43.74630747109794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40574c0bd6d5473b%3A0x6e8a3ad81b060113!2sThe%20Warehouse%20Venue!5e1!3m2!1sen!2sca!4v1771187358717!5m2!1sen!2sca"
              }
            />
          </div>
          {/* <Paragraph>
            Genshiken Festival will take place in the beautiful Warehouse Venue
            located in Downsview Park! The venue is just a short walk from
            Downsview GO, and Downsview Park Station on Line 1
          </Paragraph> */}
        </section>
      </Container>
    </main>
  );
}
