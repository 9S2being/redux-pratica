import { Grid, Typography, Container, Paper, TextField, Button } from '@mui/material';
import { useAppDispatch } from '../store/hook';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { adicionar } from '../store/slices/CarrinhoSllice';


export function Mercadinho() {
    const dispatch = useAppDispatch();

    const itemsNoCarrinho = useSelector((state: RootState) => state.carrinho.carrinho);

    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nome = e.currentTarget.item.value;
        const quantidade = parseFloat(e.currentTarget.quantidade.value);

        if (quantidade <= 0 || isNaN(quantidade)) {
            alert('A quantidade precisa ser um número positivo');
            return;
        }

        dispatch(adicionar({ nome, quantidade }));

        console.log('Item adicionado:', { nome, quantidade });
    }

    return (
        <Container style={{ marginTop: 'calc(50vh - 150px)', marginBottom: 'calc(50vh - 150px)' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Adicione um item ao carrinho
                    </Typography>
                    <form onSubmit={handleAdd}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item xs={12}>
                                <TextField
                                    name="item"
                                    label="Item"
                                    variant="outlined"
                                    size="small"
                                    style={{width: '300px'}} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="quantidade"
                                    label="Quantidade"
                                    variant="outlined"
                                    size="small"
                                    type="number"
                                    style={{width: '300px'}} 
                                />
                            </Grid>
                            <Grid item xs={12} ml={8}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                    style={{width: '150px'}} 
                                >
                                    Adicionar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Typography variant="h6" style={{ marginLeft: '90px' }} gutterBottom>
                        Carrinho
                    </Typography>
                    <Grid border={3}>
                        <Paper elevation={3}>
                            {itemsNoCarrinho.map((item, index) => (
                                <div key={index}>
                                    <Typography>{item.nome}  x{item.quantidade}</Typography>
                                </div>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}