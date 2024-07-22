import { Produit } from '../models/Produit.model';
import BarreRecherche from './BarreRecherche';
import ProduitTable from './ProduitTable';
import { useState } from 'react';

interface ProduitTableFiltrableProps {
  produits: Produit[];
}

export default function ProduitTableFiltrable(
  props: ProduitTableFiltrableProps
) {
  const [filtreTexte, setFiltreTexte] = useState('');
  const [filtreInventaireSeulement, setFiltreInventaireSeulement] =
    useState(false);

  const gererFiltreTexteChange = (valeur: string) => {
    setFiltreTexte(valeur);
  };

  const gererFiltreInventaireSeulementChange = (valeur: boolean) => {
    setFiltreInventaireSeulement(valeur);
  };

  return (
    <div>
      <BarreRecherche
        texte={filtreTexte}
        seulementEnInventaire={filtreInventaireSeulement}
        onTexteChange={gererFiltreTexteChange}
        onSeulementEnInventaireChange={gererFiltreInventaireSeulementChange}
      />
      <ProduitTable
        produits={props.produits}
        texte={filtreTexte}
        seulementEnInventaire={filtreInventaireSeulement}
      />
    </div>
  );
}
