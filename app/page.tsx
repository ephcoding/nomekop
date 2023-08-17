import Image from "next/image";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
				<h2>NOMEKOP: Find Your Pokemon</h2>
			</div>

			<div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
				<OGCard label='Card 1' description='description 1' href='/' />
				<OGCard label='Card 2' description='description 2' href='/' />
				<OGCard label='Card 3' description='description 3' href='/' />
				<OGCard label='Card 4' description='description 4' href='/' />
			</div>
		</main>
	);
}

type CardOptions = {
	label: string;
	description: string;
	href: string;
};

// const OGCard = ({ label, description, href }: CardOptions) => {
const OGCard = (cardOptions: CardOptions) => {
	const { label, description, href } = cardOptions;

	return (
		<a
			href={href}
			className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
			target='_blank'
			rel='noopener noreferrer'
		>
			<h2 className={`mb-3 text-2xl font-semibold`}>
				{`${label}`}
				<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
					-&gt;
				</span>
			</h2>
			<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
				{`${description}`}
			</p>
		</a>
	);
};
