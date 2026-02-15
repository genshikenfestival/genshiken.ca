/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { PropsWithChildren } from "react";

interface ParagraphProps extends PropsWithChildren {
  className?: string;
}

export default function Paragraph({
  className = "",
  children,
}: ParagraphProps) {
  return <p className={`md:text-lg ${className}`}>{children}</p>;
}
