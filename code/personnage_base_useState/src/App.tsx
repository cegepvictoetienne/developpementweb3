import Personnage from './components/personnage.component';
import { useState } from 'react';
import './App.css';

function App() {
  const [nom, setNom] = useState('');

  const nomDuPersonnage = 'Fluffy McChat';
  const photoDuPersonnage = 'https://placekitten.com/300/300';
  const adresseDuPersonnage = '123 Ave Des Félins';

  return (
    <>
      <input value={nom} onChange={(e) => setNom(e.target.value)} />
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
