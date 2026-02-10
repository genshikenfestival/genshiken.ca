/**
 * Copyright (c) 2026 Genshiken Festival / Ontario Anime Society
 * All rights reserved.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});
const fredoka = Fredoka({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genshiken Festival 2026",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className="min-h-screen h-screen">
      <body
        className={`${inter.className} antialiased min-h-screen h-screen w-screen`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
