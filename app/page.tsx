/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Callout from "@/lib/components/Callout";
import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import Paragraph from "@/lib/components/core/typography/Paragraph";
import Hero from "@/lib/components/pages/home/Hero";
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "2026" });
export default function Home() {
  return (
    <main className="max-w-full flex-col items-center">
      <Hero />
      {/* <div className="min-h-[80vh]"></div> */}
      <Container className="mt-20 mb-24">
        <Callout title="What is Genshiken?" className="">
          Genshiken Festival is a one-day convention organized by a variety of
          Ontario University Anime Clubs and brought to you by some of the same
          organizers as Ākēdo Festival! The Festival features Artist Alleys,
          Maid Cafe, Performances, and more!
        </Callout>
        <Heading level="h2">Events</Heading>
        <Paragraph>...Events go here</Paragraph>

        <div>
          <Heading level="h2">When and Where?</Heading>
          <Paragraph>...Events go here</Paragraph>
        </div>
      </Container>
    </main>
  );
}
