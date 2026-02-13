/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

export default function Container({
  children,
  className,
  extended = false,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  extended?: boolean;
  isTopLevel?: boolean;
}>) {
  return (
    <div
      className={
        extended
          ? `mx-auto max-w-[100%] sm:px-24 2xl:max-w-[2560px] 2xl:px-80 ${className}`
          : `mx-auto max-w-[75%] md:max-w-[100%] md:px-20 xl:max-w-[100%] xl:px-80 2xl:max-w-[2560px] 2xl:px-80 ${className}`
      }
    >
      {children}
    </div>
  );
}
