import "./Personnage.css";

interface IPersonnageProps {
  nom: string;
  photo: string;
  adresse: string;
}

const Personnage = (props: IPersonnageProps) => {
  return (
    <div className="container">
      <div className="photo">
        <img src={props.photo} />
      </div>
      <div className="info">
        <p>{props.nom}</p>
        <p className="addresse">{props.adresse}</p>
      </div>
    </div>
  );
};

export default Personnage;
