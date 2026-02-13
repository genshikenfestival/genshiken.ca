/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { Button } from "@headlessui/react";
import Heading from "./core/typography/Heading";
import Paragraph from "./core/typography/Paragraph";
import Image from "next/image";

export default function Callout({
  className,
  title,
  children,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  className?: string;
}>) {
  return (
    <div className="relative mx-auto mb-24 max-w-5xl">
      <div className="bg-brand-white border-brand-purple relative flex flex-col gap-4 rounded-2xl border-2 p-12">
        <Image
          className="absolute -top-18 -right-14"
          src={"/assets/mascot/aki-mug.png"}
          alt=""
          height={125}
          width={125}
        />
        <Heading level="h2">{title}</Heading>
        <Paragraph className="">{children}</Paragraph>
      </div>
      <Image
        className="absolute -bottom-12 -left-8"
        src={"/assets/flowers.png"}
        alt=""
        height={125}
        width={125}
      />
    </div>
  );
}
