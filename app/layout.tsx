import "./globals.css";
import type { Metadata } from "next";
import NextLink from "next/link";
import NextImage from "next/image";
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
		<html lang='en'>
			<body className={inter.className}>
				<main className='flex min-h-screen flex-col items-center p-4'>
					<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
						<div
							style={{ position: "relative", height: "100px", width: "200px" }}
						>
							<NextLink href='/'>
								<NextImage
									alt='PokÉxplore app logo'
									src='/pokexplore-500x205-white.png'
									layout='fill'
									objectFit='contain'
								/>
							</NextLink>
						</div>
					</div>
					{children}
				</main>
			</body>
		</html>
	);
}
