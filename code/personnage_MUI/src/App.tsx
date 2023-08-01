import Personnage from './components/personnage.component';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nom, setNom] = useState('');
  const [longueurNom, setLongueurNom] = useState(0);

  useEffect(() => {
    setLongueurNom(nom.length);
  }, [nom]);

  const nomDuPersonnage = 'Fluffy McChat';
  const photoDuPersonnage = 'https://placekitten.com/300/300';
  const adresseDuPersonnage = '123 Ave Des Félins';

  return (
    <>
      <input value={nom} onChange={(e) => setNom(e.target.value)} />
      <span>Le nom a {longueurNom} caractères</span>
      <Personnage
        nom={nomDuPersonnage}
        photo={photoDuPersonnage}
        adresse={adresseDuPersonnage}
      />
      <Personnage
        nom={nom}
        photo="https://placekitten.com/300/300"
        adresse="444 de le Bête"
      />
    </>
  );
}

export default App;
