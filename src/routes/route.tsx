import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LojaPage } from '../pages/lojaPage/LojaPage';
import { PokemonPage } from '../pages/pokemonPage/PokemonPage';


const routerConfig = [
  {
     path: '/',
     element: <LojaPage /> 
  },
  {
     path: '/pokemons',
     element: <PokemonPage />
  }
]

const router = createBrowserRouter(routerConfig);

const RouterApp: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default RouterApp;
