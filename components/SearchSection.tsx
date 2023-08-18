"use client";
import { useState } from "react";
import { Form, Input } from "react-daisyui";

import { PokemonCard } from "@/components/PokemonCard";

type SearchOPtions = {
  searchResults: any;
};

export function SearchSection({ searchResults }: SearchOPtions) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (searchResults: any) => {
    return searchResults.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredResults = searchFilter(searchResults);

  return (
    <>
      <h3 className="text-2xl py-6 text-center">Find Your Pokemon!</h3>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Form>
          <Form.Label htmlFor="name">Pokemon Name</Form.Label>
          <Input
            id="pokemonName"
            type="text"
            value={searchText}
            placeholder="enter name"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form>
      </div>
      <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>

      <div className="mb-32 grid gap-6 text-center lg:mb-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:text-left">
        {filteredResults.map((pokemon: any) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
    </>
  );
}
