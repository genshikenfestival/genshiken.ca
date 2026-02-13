/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {
  level: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
}

export default function Heading({
  level = "h1",
  className = "",
  children,
}: HeadingProps) {
  switch (level) {
    case "h1":
      return <h1 className={`${className}`}>{children}</h1>;
    case "h2":
      return (
        <h2
          className={`font-brand text-4xl font-bold md:text-5xl ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return <h3 className={`${className}`}>{children}</h3>;
    case "h4":
      return <h4 className={`${className}`}>{children}</h4>;
    case "h5":
      return <h5 className={`${className}`}>{children}</h5>;
    default:
      return <h1 className={`${className}`}>{children}</h1>;
  }
}
