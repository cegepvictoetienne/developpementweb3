interface ProduitCategorieRangeeProps {
  categorie: string;
}

export default function ProduitCategorieRangee(
  props: ProduitCategorieRangeeProps
) {
  return (
    <tr>
      <th colSpan={2}>{props.categorie}</th>
    </tr>
  );
}
