import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Definindo tipos
interface Item {
    nome: string;
    quantidade: number;
}

interface CarrinhoState {
    carrinho: Item[];
}

// Estado inicial
const initialState: CarrinhoState = {
    carrinho: [],
};

// Criando o slice
const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        // Adiciona ao carrinho
        adicionar: (state, action: PayloadAction<Item>) => {
            const { nome } = action.payload;
            
            // Verifica se o item já está no carrinho
            const itemIndex = state.carrinho.findIndex(item => item.nome === nome);

            if (itemIndex !== -1) {
                // Se o item já existe, incrementa a quantidade
                state.carrinho[itemIndex].quantidade++;
            } else {
                // Caso contrário, adiciona o item ao carrinho
                state.carrinho.push(action.payload);
            }
        },
    },
});

// Exportando actions e reducer
export const { adicionar } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
