import { useContext } from 'react';
import { Drawer } from '@mui/material';
import { PanierContext } from '../contexts/panier.context';
import Fiche from './fiche.component';
import { Box } from '@mui/material';

export default function Panier() {
  const { itemsPanier, panierOuvert, setPanierOuvert } =
    useContext(PanierContext);
  return (
    <Drawer
      anchor="right"
      open={panierOuvert}
      onClose={() => {
        setPanierOuvert(false);
      }}
    >
      <Box sx={{ width: 300 }}>
        {itemsPanier &&
          itemsPanier.map((item) => {
            return <Fiche chapeau={item} dansPanier={true} />;
          })}
      </Box>
    </Drawer>
  );
}
