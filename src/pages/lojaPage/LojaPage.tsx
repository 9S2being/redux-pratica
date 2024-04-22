import { Button, Grid, Link } from "@mui/material";
import { Mercadinho } from "../../components/mercado";
import { Link as RouterLink } from 'react-router-dom';


export function LojaPage() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
                minHeight: '100vh',
                backgroundColor: '#f0f0f0',
                padding: '20px'
            }}
        >
            <Grid item xs={12} md={10}>
                <div style={{
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    padding: '20px',
                    backgroundColor: 'white'
                }}>
                   <Grid container justifyContent="flex-end"> 
                        <Link component={RouterLink} to="/pokemons">
                            <Button variant="contained" color="primary">
                                Ir para outra página
                            </Button>
                        </Link>
                    </Grid>
                    <Mercadinho />
                </div>
            </Grid>
        </Grid>
    )
}
