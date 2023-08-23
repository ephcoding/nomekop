import { ProgressBar } from "components/ProgressBar";

import { Sprites } from "components/Sprites";
import { getSinglePokemon } from "services/pokeapi";

type PageParams = {
  params: { name: string };
};

export default async function PokemonPage({ params }: PageParams) {
  const { name } = params;

  const pokemon = await getSinglePokemon(name);

  const colorMap: { [key: string]: string } = {
    hp: "primary",
    attack: "secondary",
    defense: "warning",
    "special-attack": "info",
    "special-defense": "error",
    speed: "success",
  };

  return (
    <>
      <h1 className="font-slackey text-4xl text-bold pt-4">{name}</h1>
      <Sprites sprites={pokemon.sprites} />

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
