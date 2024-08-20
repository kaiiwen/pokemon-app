import axios from 'axios';

interface PokemonResponse {
  name: string;
  url: string;
}

interface PokemonDetailResponse {
  name: string;
  height: number;
  weight: number; 
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

export const getPokemonList = async (): Promise<PokemonResponse[]> => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  return response.data.results;
};

export const getPokemonDetail = async (url: string): Promise<PokemonDetailResponse> => {
  const response = await axios.get(url);
  return response.data;
};
