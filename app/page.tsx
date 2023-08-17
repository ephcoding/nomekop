import { SearchSection } from "@/components/SearchSection";
import { getAllPokemon } from "@/services/pokeapi";

export default async function Home() {
	const results = await getAllPokemon();

	return <SearchSection searchResults={results} />;
}
