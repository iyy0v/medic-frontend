import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'

export default function Login() {
    const [remember,setRemember] = useState(false);

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

    const handleRemember = (event) => {
        setRemember(!remember);
        // MODIFY SESSION TOKEN EXPIRY DURATION
    };

    const handleLogin = () => {
        // SEND LOGIN REQUEST
    }

    return (
        <ThemeProvider theme={theme}>
        <Box 
            component='form'
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, height: '95vh' }}
        >
            <Typography variant="h3" color="primary" gutterBottom>
                Se connecter
            </Typography>
            <TextField required id="standard-basic" label="Email" variant="standard" sx={{ minWidth: 300, width: '25%', maxWidth: 500 }} />

            <TextField required id="standard-basic" label="Mot de Passe" type="password" variant="standard" sx={{ minWidth: 300, width: '25%', maxWidth: 500 }} />

            <FormGroup sx={{ minWidth: 300, width: '25%', maxWidth: 500 }}>
                <FormControlLabel control={<Checkbox onChange={handleRemember}/>} label="Se souvenir de moi." />
            </FormGroup>
        
            <Button variant="contained" onClick={handleLogin}>
                Se connecter
            </Button>
        </Box>
        </ThemeProvider>
    )
}