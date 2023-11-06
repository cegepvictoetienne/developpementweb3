import React, { useState, useEffect, useContext } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import Fiche from './fiche.component';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Badge } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { PanierContext } from '../contexts/panier.context';
import Panier from '../components/panier.component';
import { IChapeau } from '../models/ichapeau.model';

const chapeaux: IChapeau[] = [
  {
    id: 1,
    nom: 'Rebord Brun',
    photo: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    prix: 25,
  },
  {
    id: 2,
    nom: 'Beanie Bleu',
    photo: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    prix: 18,
  },
  {
    id: 3,
    nom: 'Cowboy Brun',
    photo: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    prix: 35,
  },
  {
    id: 4,
    nom: 'Rebord Gris',
    photo: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
    prix: 25,
  },
  {
    id: 5,
    nom: 'Beanie Vert',
    photo: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
    prix: 18,
  },
  {
    id: 6,
    nom: 'Casquette Palmier',
    photo: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
    prix: 14,
  },
  {
    id: 7,
    nom: 'Beanie Rouge',
    photo: 'https://i.ibb.co/bLB646Z/red-beanie.png',
    prix: 18,
  },
  {
    id: 8,
    nom: 'Casquette Loup',
    photo: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
    prix: 14,
  },
  {
    id: 9,
    nom: 'Blue Snapback',
    photo: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
    prix: 16,
  },
];

export default function Home() {
  const [nombreItemsDansPanier, setNombreItemsDansPanier] = useState(0);
  const { itemsPanier, setPanierOuvert } = useContext(PanierContext);

  useEffect(() => {
    setNombreItemsDansPanier(itemsPanier.length);
  }, [itemsPanier]);

  const togglePanier = async (event: React.MouseEvent) => {
    event.preventDefault();
    setPanierOuvert(true);
  };

  return (
    <div className="Home">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chapeaux en folie
          </Typography>
          <IconButton onClick={togglePanier}>
            <Badge badgeContent={nombreItemsDansPanier}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Panier />
      <Grid container spacing={2}>
        {chapeaux &&
          chapeaux.map((chapeau) => {
            return (
              <Grid>
                <Fiche chapeau={chapeau} dansPanier={false} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
