import { useContext } from 'react';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { PanierContext } from '../contexts/panier.context';
import { IChapeau } from '../models/ichapeau.model';

interface IFiche {
  chapeau: IChapeau;
  dansPanier: boolean;
}

export default function Fiche(props: IFiche) {
  const { itemsPanier, setItemsPanier } = useContext(PanierContext);

  const ajouterAuPanier = () => {
    const nouveauPanier = [...itemsPanier, { ...props.chapeau, quantite: 1 }];
    console.log(nouveauPanier);
    setItemsPanier(nouveauPanier);
  };

  const retirerDuPanier = () => {
    var i = 0;
    console.log('retirer du panier : ', props.chapeau.id);
    while (i < itemsPanier.length) {
      if (itemsPanier[i].id === props.chapeau.id) {
        itemsPanier.splice(i, 1);
      } else {
        ++i;
      }
    }
    const nouveauPanier = [...itemsPanier];
    setItemsPanier(nouveauPanier);
  };

  return (
    <Card sx={{ width: 300, maxWidth: 300, height: 300, maxHeight: 300 }}>
      <CardMedia
        component="img"
        height="150"
        sx={{ objectFit: 'contain' }}
        image={props.chapeau.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.chapeau.nom}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.chapeau.prix}&nbsp;$
        </Typography>
      </CardContent>
      <CardActions>
        {!props.dansPanier && (
          <Button
            size="small"
            color="primary"
            onClick={() => ajouterAuPanier()}
          >
            Ajouter au panier
          </Button>
        )}
        {props.dansPanier && (
          <Button
            size="small"
            color="primary"
            onClick={() => retirerDuPanier()}
          >
            Retirer du panier
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
