import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPokemon } from '../services/pokemon';

const initialState = {
  loading: false,
  error: null,
  data: null
};

export const getPokemon = createAsyncThunk('pokemon/fetchPoken', async () => {
  const res = await fetchPokemon();
  return res.data;
});

export const listSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload?.results;
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const selectPokemons = (state) => {
  return state.pokemon.data;
};

export default listSlice.reducer;
