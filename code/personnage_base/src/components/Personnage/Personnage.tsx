import './Personnage.css';

const Personnage = () => {
  const nomDuPersonnage = 'Fluffy McChat';
  const photoDuPersonnage = 'https://placecats.com/300/300';
  const adresseDuPersonnage = '123 Ave Des Félins';

  return (
    <div className="container">
      <div className="photo">
        <img src={photoDuPersonnage} />
      </div>
      <div className="info">
        <p>{nomDuPersonnage}</p>
        <p className="addresse">{adresseDuPersonnage}</p>
      </div>
    </div>
  );
};

export default Personnage;
