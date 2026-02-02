/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 *
 * TODO: This should hardcode the diff logo types available in the Assets folder.
 */

import Image from "next/image";

export default function Logo({
  type,
  className,
}: {
  type: string;
  className: string | undefined;
}) {
  return (
    <Image
      src={type}
      className={className}
      alt="Genshiken Fest Logo"
      width={1000}
      height={500}
    />
  );
}
