import React, { createContext, useState } from 'react';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

// Define the PokemonContext interface
interface PokemonContextType {
  pokemons: Pokemon[];
  capturedPokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  capture: (pokemon: Pokemon) => () => void;
  release: (pokemon: Pokemon) => () => void;
}

// Create the PokemonContext
export const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  capturedPokemons: [],
  setPokemons: () => {},
  capture: () => () => {},
  release: () => () => {},
});

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([
    { id: 1, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 3, name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  ]);
  const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);

  const capture = (pokemon: Pokemon) => () => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
  };

  const release = (pokemon: Pokemon) => () => {
    setCapturedPokemons(capturedPokemons.filter(p => p.id !== pokemon.id));
  };

  return (
    <PokemonContext.Provider value={{ pokemons, capturedPokemons, setPokemons, capture, release }}>
      {children}
    </PokemonContext.Provider>
  );
};