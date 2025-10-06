import "./App.css";
import Personnage from "../Personnage";
import { useEffect, useState } from "react";

function App() {
  const personnage = {
    nom: "Fluffy McChat",
    photo: "https://placecats.com/300/300",
    adresse: "123 Ave Des Félins",
  };

  const [nom, setNom] = useState("Fanta le Chat");
  const [longueurDuNom, setLongueurDuNom] = useState(0);

  useEffect(() => {
    setLongueurDuNom(nom.length);
  }, [nom]);

  const photoDuPersonnage = "https://placecats.com/300/300";
  const adresseDuPersonnage = "12123 Ave Des Félins";

  return (
    <>
      <input value={nom} onChange={(e) => setNom(e.target.value)} />
      <p>Longueur du nom : {longueurDuNom}</p>
      <Personnage {...personnage} key={1} />
      <Personnage
        nom={nom}
        photo={photoDuPersonnage}
        adresse={adresseDuPersonnage}
        key={2}
      />
    </>
  );
}

export default App;
