import React from "react";
import "./App.css";
import { PokemonProvider } from "./context/pokemonContext";
import PokemonsList from "./components/pokemonsList";
import CapturedPokemons from "./components/capturedPokemons";
import PokemonForm from "./components/pokemonForm";

const App: React.FC = () => {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonForm />
        <PokemonsList />
        <CapturedPokemons />
      </div>
    </PokemonProvider>
  );
};

export default App;
