import Box from '@mui/material/Box';
import CardList from '../../Components/CardList'
import Navbar from '../../Components/Navbar'
import Filters from '../../Components/Filters'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Result({ params }) {
    const prodCount = 20;
    const products = [
        {
            name: 'CocaCola Zero',
            vendor: 'Rayane',
            price: 120,
            tags: ['Sans sucre', 'Fit'],
            location: 'Alger',
            image: 'https://i.cbc.ca/1.7016575.1698947774!/fileImage/httpImage/new-coke-bottles.jpg'
        },
        {
            name: 'Pre Workout',
            vendor: 'Sofiane',
            price: 7300,
            tags: ['Fit'],
            location: 'Oran',
            image: 'https://waytnutrition.com/cdn/shop/products/DSC00686.jpg'
        },
        {
            name: 'Jus Naturel',
            vendor: 'Nabil',
            price: 340,
            tags: ['Sans sucre'],
            location: 'LaGlaciere',
            image: 'https://i.ytimg.com/vi/2gRdSwQ_2qo/maxresdefault.jpg'
        },
        {
            name: 'Patisserie',
            vendor: 'Nabih',
            price: 320,
            tags: ['Sans sucre', 'Sans sel'],
            location: 'Dely Brahim',
            image: 'https://www.cookismo.fr/wp-content/uploads/2016/12/gateau-vegan-sans-gluten-coco-vanille-880%C2%A9christelle-vogel-cookismo.jpg'
        }
    ]

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
        <Box sx={{paddingTop: 10}}>
            <Navbar />
            <Filters />
            <CardList products={products} prodCount={prodCount} sx={{ height: '98vh'}}/>
        </Box>
    </ThemeProvider>
    )
  }