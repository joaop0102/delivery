import axios from 'axios';
import { Pokemon } from '@/@type/pokemon';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemons = async (
  limit = 151
): Promise<Pokemon[]> => {

  const response = await api.get(`/pokemon?limit=${limit}`);

  const list = response.data.results;

  const detailedList = await Promise.all(
    list.map(async (pokemon: { url: string }) => {

      const pokemonValues = await axios.get(pokemon.url);

      const dadosPokemon = pokemonValues.data;

      const pokemonData: Pokemon = {
        nome: dadosPokemon.name,
        index: dadosPokemon.id.toString().padStart(3, '0'),
        tipos: dadosPokemon.types.map((t: any) => t.type.name),
        imagem: dadosPokemon.sprites.front_default,
        poderes: dadosPokemon.stats.map((s: any) => ({
          nome: s.stat.name,
          forca: s.base_stat,
        })),
      };

      return pokemonData;
    })
  );

  return detailedList;
};