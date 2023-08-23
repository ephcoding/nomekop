import "./globals.css";
import type { Metadata } from "next";
import NextLink from "next/link";
import NextImage from "next/image";
import NextHead from "next/head";
import { Inter } from "next/font/google";

import { Footer } from "components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokExplore",
  description: "Explore Your Favorite Pokemon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextHead>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Slackey&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
          <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
            <div
              style={{ position: "relative", height: "100px", width: "200px" }}
            >
              <NextLink href="/">
                <NextImage
                  alt="PokÉxplore app logo"
                  src="/pokexplore-500x205-white.png"
                  layout="fill"
                  objectFit="contain"
                />
              </NextLink>
            </div>
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
