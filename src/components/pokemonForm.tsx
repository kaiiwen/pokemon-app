import React, { useState, useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const PokemonForm: React.FC = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const { pokemons, setPokemons } = useContext(PokemonContext);

  const generateID = () => pokemons.length + 1;

  const handleNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(e.target.value);
  const handleImageOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonImage(e.target.value);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPokemons([
      ...pokemons,
      { id: generateID(), name: pokemonName, image: pokemonImage },
    ]);
    setPokemonName("");
    setPokemonImage("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Pokemon name"
        value={pokemonName}
        onChange={handleNameOnChange}
      />
      <input
        type="text"
        placeholder="Pokemon image URL"
        value={pokemonImage}
        onChange={handleImageOnChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default PokemonForm;
