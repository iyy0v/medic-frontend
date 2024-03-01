import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardActionArea, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ActionAreaCard( props ) {
    const { name, vendor, price, tags, wilaya }  = props;

    function createChips(tags) {
      const tagChips = tags.map((value) => {
        return (
          <Chip item label={value} />
        );
      });

      return tagChips
    }
    

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

  if(!tags) return ''
  else {
    return (
      <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image="https://i.cbc.ca/1.7016575.1698947774!/fileImage/httpImage/new-coke-bottles.jpg"
            alt={name}
          />
          <CardContent>
            <Grid container direction="row" justifyContent='space-between' alignItems='center' sx={{ width: 300 }}>
              <Typography gutterBottom variant="h5">
                {name}
              </Typography>
              <Typography gutterBottom variant="h6">
                {price + ' DA'}
              </Typography>
            </Grid>
            <Grid container gap={1} sx={{ width: 300, marginBottom: 3 }}>
              {...createChips(tags)}
            </Grid>
            <Divider variant="middle" />
            <Grid container direction="row" justifyContent='space-between' alignItems='center' sx={{ width: 300, marginTop: 3 }}>
              <Typography variant="body1" color="primary">
                {vendor}
              </Typography>
              <Box item>
                <Grid container direction="row" alignItems='center'>
                  <LocationOnIcon color="primary" />
                  <Typography variant="body1">
                    {wilaya}
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      </ThemeProvider>
    );
  }
}