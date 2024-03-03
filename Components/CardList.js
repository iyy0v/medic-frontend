import { Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard'
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function CardList( props ) {
    const { products, prodCount } = props;

    const PAGES_COUNT = Math.trunc(prodCount/8) == (prodCount/8) ? prodCount/8 : Math.trunc(prodCount/8) + 1;

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

    function createCards(products) {
        const cards = products.map((value) => {
          return (
            <Grid item>
                <ProductCard name={value.name} vendor={value.vendor} price={value.price} tags={value.tags} location={value.location} image={value.image} />
            </Grid>
          );
        });
  
        return cards
      }

    return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" justifyContent="center" alignItems="center" sx={{width: '100vw', overflow: 'hidden', margin: 0, padding: 0, minHeight: '101%'}}>
        <Grid item>
        <Grid 
            container
            direction="column"
            rowGap={2}
            sx={{minHeight: '110%'}}
        >
            <Grid item>
                <Grid container direction="row" justifyContent="center" columnGap={2} rowGap={2} sx={{minHeight: '110%'}}>
                    {...createCards(products)}
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" justifyContent="center" columnGap={2} rowGap={2} sx={{minHeight: '110%'}}>
                    {...createCards(products)}
                </Grid>
            </Grid>
        </Grid>
        </Grid>
        <Grid item>
        <Pagination count={PAGES_COUNT} color="primary" sx={{marginTop: 2}}/>
        </Grid>
      </Grid>
    </ThemeProvider>
    )
  }