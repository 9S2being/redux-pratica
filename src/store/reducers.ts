import { combineReducers } from '@reduxjs/toolkit';

import CarrinhoReducer from './slices/CarrinhoSllice';
import pokemonReducer from './slices/PokemonSlice';

const rootReducer = combineReducers({
  carrinho: CarrinhoReducer,
  pokemon: pokemonReducer,
});


export default rootReducer;