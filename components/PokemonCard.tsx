"use client";
import NextLink from "next/link";
import { Button, Card as DaisyCard } from "react-daisyui";

type CardProps = {
  name: string;
  url: string;
};

const classes =
  "group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";

export const PokemonCard = ({ name, url }: CardProps) => {
  return (
    <NextLink key={`${name} Card`} href={name}>
      <DaisyCard className="border-4 border-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-green-400 hover:scale-110">
        {/* <DaisyCard.Image src='/' /> */}
        <DaisyCard.Body>
          <DaisyCard.Title>{name}</DaisyCard.Title>
        </DaisyCard.Body>
      </DaisyCard>
    </NextLink>
  );
};
