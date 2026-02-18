/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Image from "next/image";

interface EventCardProps extends React.PropsWithChildren {
  eventName: string;
  href?: string;
  image: {
    src: string;
    width: number;
    height: number;
    className?: string;
  };
  className?: string;
}

export default function EventCard({
  className,
  eventName,
  href,
  image,
  children,
}: EventCardProps) {
  return (
    <div
      className={`group relative w-full cursor-pointer rounded-2xl ${className ?? ""}`}
    >
      <a href={href}>
        <div className="group-hover:bg-brand-purple absolute h-full w-full bg-transparent opacity-75 mix-blend-screen transition-all duration-200" />
        <p className="bg-brand-purple group-hover:text-brand-purple absolute bottom-4 rounded-br-2xl px-4 py-2 text-sm font-bold text-white uppercase group-hover:bg-black md:px-8 md:py-4 md:text-base">
          {eventName}
        </p>
        <Image
          src={image.src}
          height={image.height}
          width={image.width}
          alt=""
          className={
            image.className ??
            `h-full min-h-full w-full min-w-full object-cover object-top`
          }
        />
        {/* {children} */}
      </a>
    </div>
  );
}
