import React, { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const CapturedPokemons: React.FC = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="section">
      <h2>Captured Pokemons</h2>
      {capturedPokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`} className="pokemon-card">
          <div>
            <img src={pokemon.image} alt={pokemon.name} />
            <span>{pokemon.name}</span>
          </div>
          <button onClick={release(pokemon)}>Release</button>
        </div>
      ))}
    </div>
  );
};

export default CapturedPokemons;
