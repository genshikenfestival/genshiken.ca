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
    <div className={`${isTopLevel ? "mt-25" : ""} container-full mx-auto`}>
      {children}
    </div>
  );
}
