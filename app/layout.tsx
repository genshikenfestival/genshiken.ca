/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";

import { ALL_NAVIGATION } from "@/config/navigation.config";

import Footer from "@/lib/components/Footer";
import Navbar from "@/lib/components/Navbar";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genshiken Festival 2026",
  description:
    "A 1-Day anime convention hosted by Ontario Universities Anime Clubs & Students!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className="scroll-smooth">
      <body className={`${inter.className} m-0 p-0 antialiased`}>
        <Navbar items={ALL_NAVIGATION} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
