import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'


export default function Signup() {
    const [gender,setGender] = useState('');

    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const theme = createTheme({
        palette: {
          primary: {
            main: '#FF5428',
          },
          secondary: {
            main: '#ffffff', // Your desired secondary color
          },
        },
    });

    return (
        <ThemeProvider theme={theme}>
        <Box 
            component='form'
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3, height: '95vh' }}
        >
            <Typography variant="h3" color="primary" gutterBottom>
                S'inscrire
            </Typography>
            <TextField required id="standard-basic" label="Nom" variant="standard" sx={{ minWidth: 300, width: '25%', maxWidth: 500 }} />
            <TextField required id="standard-basic" label="Email" variant="standard" sx={{ minWidth: 300, width: '25%', maxWidth: 500 }} />
            <FormControl required variant="standard" sx={{ minWidth: 300, width: '25%', maxWidth: 500 }}>
                <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={gender}
                    label="Genre"
                    onChange={handleGender}
                    
                >
                    <MenuItem value={'Male'} >Male</MenuItem>
                    <MenuItem value={'Female'} >Female</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{ minWidth: 300, width: '25%', maxWidth: 500, marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label">Date de naissance</InputLabel>
                <LocalizationProvider required dateAdapter={AdapterDayjs} sx={{ minWidth: '100%' }}>
                    <DatePicker required sx={{ minWidth: '100%' }} />
                </LocalizationProvider>
            </Box>
            <TextField required id="standard-basic" label="Mot de Passe" type="password" variant="standard" sx={{ minWidth: 300, width: '25%', maxWidth: 500 }} />
            <TextField required id="standard-basic" label="Confirmer Mot de Passe" type="password" variant="standard" sx={{ minWidth: 300, width: '25%', maxWidth: 500 }} />

            <Button variant="contained">
                S'inscrire
            </Button>
        </Box>
        </ThemeProvider>
    )
}