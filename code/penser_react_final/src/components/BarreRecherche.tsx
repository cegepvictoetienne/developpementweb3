interface BarreRechercheProps {
  texte: string;
  seulementEnInventaire: boolean;
  onTexteChange: (texte: string) => void;
  onSeulementEnInventaireChange: (seulementEnInventaire: boolean) => void;
}

export default function BarreRecherche(props: BarreRechercheProps) {
  function handleTexteChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onTexteChange(e.target.value);
  }

  function handleSeulementEnInventaireChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    props.onSeulementEnInventaireChange(e.target.checked);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Recherche..."
        value={props.texte}
        onChange={handleTexteChange}
      />
      <label>
        <input
          type="checkbox"
          checked={props.seulementEnInventaire}
          onChange={handleSeulementEnInventaireChange}
        />{' '}
        Seulement les produits en inventaire
      </label>
    </form>
  );
}
