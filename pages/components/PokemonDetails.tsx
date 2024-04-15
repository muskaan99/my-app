// to display the details of a selected pokemon

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../api/pokemonApi";
import { RootState } from "../store/store";
import { setPokemons, setSelectedPokemon } from "../store/pokemonSlice";
import Link from "next/link";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        dispatch(setPokemons(data.results));
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon: any) => (
          <li key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
