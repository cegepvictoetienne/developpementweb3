interface IPersonnageProps {
  nom: string;
  photo: string;
  adresse: string;
}

const Personnage = (props: IPersonnageProps) => {
  return (
    <div className="max-w-sm w-72 mx-auto flex flex-col text-center items-center bg-white text-black p-5 border border-gray-300 rounded shadow-md">
      <div className="text-center mb-5">
        <img className="w-36 h-36 rounded-full" src={props.photo} />
      </div>
      <div className="mb-5">
        <span className="italic">{props.nom}</span>
        <div className="italic">{props.adresse}</div>
      </div>
    </div>
  );
};

export default Personnage;
