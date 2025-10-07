import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

interface IPersonnageProps {
  nom: string;
  photo: string;
  adresse: string;
}

const Personnage = (props: IPersonnageProps) => {
  return (
    <Card sx={{ width: 400 }}>
      <Grid container spacing={0} direction="column" alignItems="center">
        <CardMedia
          image={props.photo}
          sx={{ height: 150, width: 150, borderRadius: '50%' }}
        />
      </Grid>
      <Box>
        <Typography variant="subtitle1">{props.nom}</Typography>
        <Typography variant="subtitle1">{props.adresse}</Typography>
      </Box>
    </Card>
  );
};

export default Personnage;
