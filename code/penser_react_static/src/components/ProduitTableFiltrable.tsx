import { Produit } from '../models/Produit.model';
import BarreRecherche from './BarreRecherche';
import ProduitTable from './ProduitTable';

interface ProduitTableFiltrableProps {
  produits: Produit[];
}

export default function ProduitTableFiltrable(
  props: ProduitTableFiltrableProps
) {
  return (
    <div>
      <BarreRecherche />
      <ProduitTable produits={props.produits} />
    </div>
  );
}
