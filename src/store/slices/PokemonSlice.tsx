/*  
    3- Com asyncthunk, liste os nomes de pessoas da api em card
*/

/*-----------------------------------------------------------------------------------------------------------------*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Pokemon {
    id: number;
    name: string;
}

interface PokemonApiResponse {
    results: Pokemon[]
}

export const fetchPokemons = createAsyncThunk<Pokemon[]>(
    'pokemons/fetchPokemon',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<PokemonApiResponse>("https://pokeapi.co/api/v2/pokemon?limit=1025");
            const data = response.data;
            return data.results;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
)


/* ----------------------------------------------------------------------------------------------------------------*/

interface PokemonState {
    pokemons: Pokemon[]
    status: 'loading' | 'succeeded'| 'failed'
    error: string | null
}

const initialState: PokemonState = {
    pokemons: [],
    status: 'loading',
    error: null
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.status ='succeeded'
            state.pokemons = action.payload
        })
        builder.addCase(fetchPokemons.rejected, (state,action) => {
            state.status = 'failed'
            state.error = action.error.message ?? 'Ocorreu um erro ao tentar buscar os pokémons da api'
        })
    },
});


export default pokemonSlice.reducer