export default function BarreRecherche() {
  return (
    <form>
      <input type="text" placeholder="Recherche..." />
      <label>
        <input type="checkbox" /> Seulement les produits en inventaire
      </label>
    </form>
  );
}
