"use client";
import { useState } from "react";
import { Form, Input } from "react-daisyui";

import { PokemonCard } from "@/components/PokemonCard";

type SearchOPtions = {
	searchList?: any;
};

export function SearchSection({ searchList }: SearchOPtions) {
	const [searchText, setSearchText] = useState("");

	const searchFilter = (searchList: any) => {
		return searchList.filter((pokemon: any) =>
			pokemon.name.toLowerCase().includes(searchText.toLowerCase())
		);
	};

	// const filteredResults = searchFilter(searchList);

	return (
		<>
			<h3 className='text-2xl py-6 text-center'>Find For Your Pokemon!</h3>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<Form>
					<Form.Label htmlFor='name'>Pokemon Name</Form.Label>
					<Input
						id='pokemonName'
						type='text'
						value={searchText}
						placeholder='enter name'
						onChange={(e) => setSearchText(e.target.value)}
					/>
				</Form>
			</div>
			<h3 className='text-3xl pt-12 pb-6 text-center'>Pokemon Collection</h3>

			<div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left'>
				<PokemonCard name='Name 1' />
				<PokemonCard name='Name 2' />
				<PokemonCard name='Name 3' />
			</div>
		</>
	);
}
