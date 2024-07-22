import './App.css';
import ProduitTableFiltrable from './components/ProduitTableFiltrable';
import PRODUITS from './donnees/produits.donnees';

function App() {
  return <ProduitTableFiltrable produits={PRODUITS} />;
}

export default App;
