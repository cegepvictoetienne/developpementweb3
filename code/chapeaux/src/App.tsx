import './App.css';
import PanierProvider from './contexts/panier.context';
import Home from './components/home.component';

function App() {
  return (
    <PanierProvider>
      <Home />
    </PanierProvider>
  );
}

export default App;
