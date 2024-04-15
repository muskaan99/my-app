import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../api/pokemonApi';
import { RootState } from '../store/store';
import { setPokemons, setSelectedPokemon } from '../store/pokemonSlice';

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        dispatch(setPokemons(data.results));
      } catch (error) {
        console.error('Failed to fetch Pokemon data error: ', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handlePokemonClick = (pokemon: any) => {
    dispatch(setSelectedPokemon(pokemon));
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon: any) => (
          <li key={pokemon.id} onClick={() => handlePokemonClick(pokemon)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;