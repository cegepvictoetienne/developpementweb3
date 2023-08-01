import {
  PersonnageContainer,
  PersonnageAddress,
  PersonnageImage,
  PersonnageInfo,
  PersonnagePhoto,
} from './personnage.styles';

interface IPersonnageProps {
  nom: string;
  photo: string;
  adresse: string;
}

const Personnage = (props: IPersonnageProps) => {
  return (
    <PersonnageContainer>
      <PersonnagePhoto>
        <PersonnageImage src={props.photo} />
      </PersonnagePhoto>
      <PersonnageInfo>
        <PersonnageAddress as="span">{props.nom}</PersonnageAddress>
        <PersonnageAddress>{props.adresse}</PersonnageAddress>
      </PersonnageInfo>
    </PersonnageContainer>
  );
};

export default Personnage;
