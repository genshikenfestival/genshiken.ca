/**
 * Copyright (c) 2026 Genshiken Festival, Contributors, Artists and Volunteers.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="min-w-screen">
      <div className="bg-brand-white inset-shadow-brand-purple/50 relative flex min-h-72 flex-col overflow-clip px-12 pt-24 inset-shadow-xs sm:min-h-48 md:justify-center md:px-32 md:pt-0">
        <div className="">
          <p className="text-base font-bold uppercase lg:text-lg">
            &copy; {new Date().getFullYear()} Genshiken Festival Organizing
            Committee
          </p>
          <p className="text-base font-light uppercase lg:text-lg">
            &copy; {new Date().getFullYear()} Ontario Anime Society
          </p>
          {/* NOTE: Development only -- Shows app version to help aid in debugging. */}
          {process.env.APP_ENVIRONMENT === "DEVELOPMENT" ? (
            <>
              <p className="mt-2 font-mono text-base font-light uppercase opacity-25">
                VERSION {process.env.COMMIT_HASH} 💜
              </p>
              <p className="mt-0 font-mono text-base font-light uppercase opacity-25">
                This version is intended only for development enviroments. If
                you see this on production, you&apos;ve screwed up.
              </p>
            </>
          ) : null}
        </div>
        <div className="right-0 bottom-0 mt-24 flex items-center justify-between opacity-50 md:absolute md:justify-center">
          <Image
            loading="lazy"
            className="-ml-14 max-w-25 md:ml-0 xl:max-w-34"
            src={"/assets/mascot/chibi/haruheart.png"}
            width={150}
            height={150}
            alt=""
          />
          <Image
            loading="lazy"
            className="-mr-14 max-w-25 md:mr-0 xl:max-w-34"
            src={"/assets/mascot/chibi/akiheart.png"}
            width={150}
            height={150}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}
