import Personnage from './components/personnage.component';
import './App.css';

function App() {
  const nomDuPersonnage = 'Fluffy McChat';
  const photoDuPersonnage = 'https://placekitten.com/300/300';
  const adresseDuPersonnage = '123 Ave Des Félins';

  return (
    <>
      <Personnage
        nom={nomDuPersonnage}
        photo={photoDuPersonnage}
        adresse={adresseDuPersonnage}
      />
      <Personnage
        nom="Charmin Ledoux"
        photo="https://placekitten.com/300/300"
        adresse="444 de le Bête"
      />
    </>
  );
}

export default App;
