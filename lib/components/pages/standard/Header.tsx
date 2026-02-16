/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Container from "../../core/Container";
import Heading from "../../core/typography/Heading";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div className="bg-brand-white inset-shadow-brand-purple/50 h-[15vh] bg-[url('/assets/hero-bg.png')] bg-auto bg-no-repeat inset-shadow-xs">
      <Container className="flex h-full items-center">
        <Heading level="h1" className="xl:text-brand-purple text-black">
          {title}
        </Heading>
      </Container>
    </div>
  );
}
