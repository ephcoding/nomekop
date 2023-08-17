import axios from 'axios'

const pokemonClient = axios.create({baseURL: 'https://pokeapi.co/api/v2'})

export const getAllPokemon = async () => {
  try {
    const response = await pokemonClient.get('/pokemon?limit=151&offset=0')
    
    return response.data
  } catch (error) {
    console.log("PokeAPI ERROR >>\n",error)
  }

}