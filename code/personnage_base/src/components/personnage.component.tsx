import './personnage.styles.css';

const Personnage = () => {
  const nomDuPersonnage = 'Fluffy McChat';
  const photoDuPersonnage = 'https://placekitten.com/300/300';
  const adresseDuPersonnage = '123 Ave Des Félins';

  return (
    <div className="container">
      <div className="photo">
        <img src={photoDuPersonnage} />
      </div>
      <div className="info">
        <p>{nomDuPersonnage}</p>
        <p className="address">{adresseDuPersonnage}</p>
      </div>
    </div>
  );
};

export default Personnage;
