import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ProductCard from '../../Components/ProductCard'
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Page({ params }) {
    
    const theme = createTheme({
        palette: {
          primary: {
            main: '#FF5428',
          },
          secondary: {
            main: '#ffffff',
          },
        },
    });

    return (
    <ThemeProvider theme={theme}>
      <Box container direction="column" justifyContent="center" alignItems="center" sx={{width: '100vw', overflow: 'hidden', margin: 0, padding: 0, minHeight: '101%'}}>
        <Grid 
            container
            direction="column"
            rowGap={2}
            sx={{minHeight: '110%'}}
        >
            <Grid item>
                <Grid container columnGap={2} sx={{minHeight: '110%'}}>
                    <Grid item>
                        <ProductCard name={'CocaCola Zero'} vendor={'Rayane'} price={120} tags={['Sans Sucre','Fit']} wilaya={'Alger'} />
                    </Grid>
                    <Grid item>
                        <ProductCard name={'CocaCola Zero'} vendor={'Rayane'} price={120} tags={['Sans Sucre','Fit']} wilaya={'Alger'} />
                    </Grid>
                    <Grid item>
                        <ProductCard name={'CocaCola Zero'} vendor={'Rayane'} price={120} tags={['Sans Sucre','Fit']} wilaya={'Alger'} />
                    </Grid>
                    <Grid item>
                        <ProductCard name={'CocaCola Zero'} vendor={'Rayane'} price={120} tags={['Sans Sucre','Fit']} wilaya={'Alger'} />  
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container columnGap={2} sx={{minHeight: '110%'}}>
                    <Grid item>
                        <ProductCard name={'CocaCola Zero'} vendor={'Rayane'} price={120} tags={['Sans Sucre','Fit']} wilaya={'Alger'} />
                    </Grid>
                    <Grid item>
                        <ProductCard name={'CocaCola Zero'} vendor={'Rayane'} price={120} tags={['Sans Sucre','Fit']} wilaya={'Alger'} />
                    </Grid>
                    <Grid item>
                        <ProductCard name={'CocaCola Zero'} vendor={'Rayane'} price={120} tags={['Sans Sucre','Fit']} wilaya={'Alger'} />
                    </Grid>
                    <Grid item>
                        <ProductCard name={'CocaCola Zero'} vendor={'Rayane'} price={120} tags={['Sans Sucre','Fit']} wilaya={'Alger'} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Pagination item count={10} color="primary" sx={{marginTop: 2}}/>
      </Box>
    </ThemeProvider>
    )
  }