import { Produit } from '../models/Produit.model';

interface ProduitRangeeProps {
  produit: Produit;
}

export default function ProduitRangee(props: ProduitRangeeProps) {
  const nom = props.produit.en_inventaire ? (
    props.produit.nom
  ) : (
    <span style={{ color: 'red' }}>{props.produit.nom}</span>
  );

  return (
    <tr>
      <td>{nom}</td>
      <td>{props.produit.prix}</td>
    </tr>
  );
}
