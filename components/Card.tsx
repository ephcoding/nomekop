"use client";
import NextLink from "next/link";
import { Card as DaisyCard } from "react-daisyui";

type CardProps = {
	name: string;
};

const classes =
	"group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";

export const Card = ({ name }: CardProps) => {
	return (
		<NextLink key={`${name} Card`} href={name} className={classes}>
			<DaisyCard>
				<DaisyCard.Title>{name}</DaisyCard.Title>
			</DaisyCard>
		</NextLink>
	);
};
