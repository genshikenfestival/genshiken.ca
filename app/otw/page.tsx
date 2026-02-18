/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Button from "@/lib/components/core/Button";
import Container from "@/lib/components/core/Container";
import { createMetadata } from "@/lib/utils/createMetadata";
import Image from "next/image";

export const metadata = createMetadata({
  title: "More information coming soon...",
});
export default function OnTheWay() {
  return (
    <Container className="flex min-h-[90%] items-center justify-center">
      <div className="flex flex-col gap-2">
        <div className="mb-12 flex w-full justify-center">
          <Image
            alt="Haru, in a miniature chibi style holding up his thumb in a thumbs-up position looking ecstatic."
            src={"/assets/mascot/chibi/haru-thumbs-up.webp"}
            height={600}
            width={300}
          />
        </div>
        <h1 className="text-2xl font-bold">
          More information coming soon! Stay tuned...
        </h1>
        <p className="text-lg font-light italic">Haru is really excited!</p>
        <br />
        <Button href="/" className="mx-auto mt-12 border-none" isGhost>
          <i className="bi bi-arrow-left mr-2" />
          Return home in the meantime...
        </Button>
      </div>
    </Container>
  );
}
