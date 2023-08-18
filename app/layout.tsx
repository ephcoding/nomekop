import "./globals.css";
import type { Metadata } from "next";
import NextLink from "next/link";
import { Inter } from "next/font/google";

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
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <NextLink href="/">
              <h2>PokExplore</h2>
            </NextLink>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
