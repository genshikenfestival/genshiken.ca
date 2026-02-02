/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 */

export default function Container({
  children,
  isTopLevel = false,
}: Readonly<{
  children: React.ReactNode;
  isTopLevel?: boolean;
}>) {
  return (
    <div
      className={`max-w-[75%] m-auto 2xl:max-w-640 2xl:px-80 xl:max-w-full xl:px-80 md:max-w-full md:px-20 font-sans ${isTopLevel ? "mt-25" : ""} container-full mx-auto`}
    >
      {children}
    </div>
  );
}
