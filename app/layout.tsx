/**
 * Copyright (c) 2026 Genshiken Festival, Contributors, Artists and Volunteers.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import "./globals.css";
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
    <html lang="en-CA" className="h-screen min-h-screen">
      <body
        className={`${inter.className} h-screen min-h-screen w-screen antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
