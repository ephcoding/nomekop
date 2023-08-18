import Image from "next/image";
import { ProgressBar } from "components/ProgressBar";

import { getSinglePokemon } from "services/pokeapi";
import { RemoteImage } from "@/components/RemoteImage";

type PageParams = {
  params: { name: string };
};

export default async function PokemonPage({ params }: PageParams) {
  const { name } = params;

  const pokemon = await getSinglePokemon(name);
  const imageUrl = pokemon.sprites.other.dream_world.front_default;
  // const imageUrl = pokemon.sprites.other.home.front_default;
  // const imageUrl = pokemon.sprites.other.home.front_shiny;
  // const imageUrl = pokemon.sprites.other["official-artwork"].front_default;
  // const imageUrl = pokemon.sprites.other["official-artwork"].front_shiny;

  const colorMap = {
    hp: "primary",
    attack: "secondary",
    defense: "warning",
    "special-attack": "info",
    "special-defense": "error",
    speed: "success",
  };

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">{name}</h1>
      <RemoteImage alt={name} imageUrl={imageUrl} />

      <h3>Weight: {pokemon.weight}</h3>
      <div className="flex-col">
        {pokemon.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;

          return (
            <div
              className="flex items-stretch"
              style={{ width: "500px" }}
              key={statName}
            >
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <ProgressBar value={statValue} color={colorMap[statName]} />
            </div>
          );
        })}
      </div>
    </>
  );
}
