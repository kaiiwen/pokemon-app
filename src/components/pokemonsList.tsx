import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/pokemonContext";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

const PokemonsList: React.FC = () => {
  const { pokemons, capture } = useContext(PokemonContext);
  const [showPokeball, setShowPokeball] = useState(false);

  const handleCapture = (pokemon: Pokemon) => () => {
    setShowPokeball(true);
    setTimeout(() => {
      setShowPokeball(false);
      capture(pokemon)();
    }, 2000);
  };

  return (
    <div className="section">
      <h2>Pokemons List</h2>
      {pokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`} className="pokemon-card">
          <div>
            <img src={pokemon.image} alt={pokemon.name} />
            <span>{pokemon.name}</span>
          </div>
          <button onClick={handleCapture(pokemon)} className="capture">
            Capture
          </button>
        </div>
      ))}
      {showPokeball && (
        <div className="pokeball-animation">
          <div className="pokeball"></div>
        </div>
      )}
    </div>
  );
};

export default PokemonsList;
