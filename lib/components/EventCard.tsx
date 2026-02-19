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
}: EventCardProps) {
  return (
    <a
      href={href}
      aria-label={eventName}
      className={`group ring-brand-purple relative w-full cursor-pointer ring-4 group-focus-within:ring-black group-hover:ring-black group-active:ring-black ${className ?? ""}`}
    >
      <div className="group-hover:bg-brand-purple group-active:bg-brand-purple group-focus-within:bg-brand-purple absolute h-full w-full bg-transparent opacity-75 mix-blend-screen transition-all duration-200" />
      <p
        className="bg-brand-purple group-hover:text-brand-purple group-focus-within:text-brand-purple group-active:text-brand-purple group-active::bg-black absolute bottom-4 rounded-br-2xl px-4 py-2 text-sm font-bold text-white uppercase group-focus-within:bg-black group-hover:bg-black md:py-2 md:text-base xl:px-8"
        aria-hidden
      >
        {eventName}
        <i className="bi bi-arrow-right ml-1"></i>
      </p>
      <Image
        src={image.src}
        height={image.height}
        width={image.width}
        loading="lazy"
        alt="" //Image is decorative
        className={
          image.className ??
          `h-full min-h-full w-full min-w-full object-cover object-top`
        }
      />
      {/* {children} */}
    </a>
  );
}
