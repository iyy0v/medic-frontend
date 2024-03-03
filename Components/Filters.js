import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

export default function Filters() {
    function handleClick() {}
    
    return(
        <Grid container direction="row" justifyContent="center" alignItems="center" gap={2} marginBottom={2}>
            <Chip item label="Sans sucre" variant="outlined" onClick={handleClick} />
            <Chip item label="Sans sel" variant="outlined" onClick={handleClick} />
            <Chip item label="Fit" variant="outlined" onClick={handleClick} />
            <Chip item label="Sans lactose" variant="outlined" onClick={handleClick} />
            <Chip item label="Sans gluten" variant="outlined" onClick={handleClick} />
            <Chip item label="Végétarien" variant="outlined" onClick={handleClick} />
        </Grid>
    )
}