# React et les styles  

## Styled-components  

- CSS dans le code JavaScript pour laisser React créer les fichiers css.  
- Fini les erreurs css lorsqu’on utilise le même nom de classe par erreur.  

Pour l’installer dans votre projet :  

``` nodejsrepl title="console"
npm i styled-components@5.3.6
npm i @types/styled-components --save-dev
```

!!! warning "Attention" 
    Il y a un bogue avec la version 6 qui empêche l’installation avec npm, il faut spécifier la version 5.3.6.  

### Remplacer le css par un fichier tsx  

``` ts title="personnage.styles.tsx"
import styled from 'styled-components';

export const PersonnageContainer = styled.div`
  max-width: 400px;
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
  color: #000;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PersonnagePhoto = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const PersonnageImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const PersonnageInfo = styled.div`
  margin-bottom: 20px;
`;

export const PersonnageAddress = styled.p`
  font-style: italic;
`;

```

``` ts title="personnage.component.tsx"
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

```

!!! note "Truc"  
    Utilisation d’un style pour un autre type d’élément HTML avec la mention __as__ :  

    ``` ts 
    <PersonnageAddress as="span">{props.nom}</PersonnageAddress>
    ```

Pour plus d'information :  

- [Styled Components - Basics](https://styled-components.com/docs/basics)  

