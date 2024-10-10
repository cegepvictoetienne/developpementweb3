import Personnage from './components/personnage.component';
import { IPersonnageData, PersonnageData } from './data/PersonnageData';
import './App.css';

function App() {
  return (
    <>
      {PersonnageData.map((personnage: IPersonnageData) => {
        return (
          <Personnage
            nom={personnage.nom}
            photo={personnage.photo}
            adresse={personnage.adresse}
          />
        );
      })}
    </>
  );
}

export default App;
