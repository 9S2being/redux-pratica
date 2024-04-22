import { Grid, Typography, Container, Paper, CardContent, Card } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { useEffect } from 'react';
import { fetchPokemons } from '../store/slices/PokemonSlice';

export function PokemonList() {
    const dispatch = useAppDispatch();
    const { pokemons, status, error } = useAppSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    return (
        <Container style={{ marginTop: 'calc(50vh - 150px)', marginBottom: 'calc(50vh - 150px)' }}>
            <Grid container justifyContent="center">
                {status === 'loading' && <Typography>Loading...</Typography>}
                {status === 'failed' && <Typography>Error: {error}</Typography>}
                {status === 'succeeded' && (
                    <Grid container spacing={2}>
                        {pokemons.map((pokemon, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <Paper>
                                    <Card style={{ height: '100%' }}>
                                        <CardContent>
                                            <Typography>ID: {index + 1}</Typography>
                                            <Typography>Nome: {pokemon.name}</Typography>
                                        </CardContent>
                                    </Card>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}
