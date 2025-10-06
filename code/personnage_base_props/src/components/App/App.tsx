import "./App.css";
import Personnage from "../Personnage";

function App() {
  const personnage = {
    nom: "Fluffy McChat",
    photo: "https://placecats.com/300/300",
    adresse: "123 Ave Des Félins",
  };

  const nomDuPersonnage = "Fanta le Chat";
  const photoDuPersonnage = "https://placecats.com/300/300";
  const adresseDuPersonnage = "12123 Ave Des Félins";

  return (
    <>
      <Personnage {...personnage} key={1} />
      <Personnage
        nom={nomDuPersonnage}
        photo={photoDuPersonnage}
        adresse={adresseDuPersonnage}
        key={2}
      />
    </>
  );
}

export default App;
