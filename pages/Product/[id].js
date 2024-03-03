import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Navbar from '../../Components/Navbar'
import Image from 'next/image'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Product() {

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

    return(
        <ThemeProvider theme={theme}>
            <Navbar />
            <Grid container direction='column' justifyContent='center' alignItems='center' gap={5} sx={{ height: '98vh'}}>
                <img src="https://i.cbc.ca/1.7016575.1698947774!/fileImage/httpImage/new-coke-bottles.jpg" minWidth='100vw' maxWidth='100vw'  borderRadius={10} />
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    <PersonIcon item fontSize='large'/>
                    <Typography variant='h2'>Andrew TATE</Typography>
                </Grid>
                <Grid container direction='column' justifyContent='center' alignItems='center' gap={1}>
                    <EmailIcon fontSize='large'/>
                    <Typography variant='h5'>andrewTheGoat@gmail.com</Typography>
                </Grid>
                <Grid container direction='column' justifyContent='center' alignItems='center' gap={1}>
                    <LocalPhoneIcon fontSize='large'/>
                    <Typography variant='h5'>0555123987</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}