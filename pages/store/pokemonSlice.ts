// pages/store/pokemonSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  id: number;
  name: string;
  // will add more properties when required
}

interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
}

const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<Pokemon[]>) {
      state.pokemons = action.payload;
    },
    setSelectedPokemon(state, action: PayloadAction<Pokemon>) {
      state.selectedPokemon = action.payload;
    },
  },
});

//action
export const { setPokemons, setSelectedPokemon } = pokemonSlice.actions;
//reducers
export default pokemonSlice.reducer;
