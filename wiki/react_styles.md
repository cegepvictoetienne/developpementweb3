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

!!! codesandbox "CodeSandbox"  
    [Démo - Styled Components](https://codesandbox.io/p/sandbox/personnage-base-jmcyw9)  

!!! manuel 
    [Styled Components - Basics](https://styled-components.com/docs/basics)  

# Material UI  

Librairie de composantes pré-stylisées.  

Pour l’installer dans votre projet :  

``` nodejsrepl title="console"
npm i @mui/material @emotion/react @emotion/styled
npm i @fontsource/roboto
npm install @mui/icons-material
```

!!! manuel 
    [Material UI - Installation](https://mui.com/material-ui/getting-started/installation/)  

## Utiliser Material UI  

``` ts title="personnage.component.tsx"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

interface IPersonnageProps {
  nom: string;
  photo: string;
  adresse: string;
}

const Personnage = (props: IPersonnageProps) => {
  return (
    <Card sx={{ width: 400 }}>
      <Grid container spacing={0} direction="column" alignItems="center">
        <CardMedia
          image={props.photo}
          sx={{ height: 150, width: 150, borderRadius: '50%' }}
        />
      </Grid>
      <Box>
        <Typography variant="subtitle1">{props.nom}</Typography>
        <Typography variant="subtitle1">{props.adresse}</Typography>
      </Box>
    </Card>
  );
};

export default Personnage;

```
!!! codesandbox "CodeSandbox"  
    [Démo - Material UI](https://codesandbox.io/p/sandbox/personnage-base-qqwqxw)  

## Thèmes dans Material UI  

La manière la plus efficace pour changer l'apparence de votre application avec Material UI est l'utilisation de thèmes.  

!!! manuel 
    [Material UI - Theming](https://mui.com/material-ui/customization/theming/)  


La place idéale pour ajouter un thème à votre application est `app.tsx` :  

``` ts title="app.tsx"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Conversation from './routes/conversation.route';
import SignIn from './components/sign-in.component';
import './App.css';
import Embeddings from './routes/embeddings.route';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const themeApplication = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#363434',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#171719',
      paper: '#202027',
    },
    text: {
      primary: '#EFECEC',
      secondary: '#FFFFFF',
      disabled: 'rgba(70,38,38,0.5)',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeApplication}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Conversation />} />
        <Route path="/embeddings" element={<Embeddings />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
```

Vous pouvez aussi assigner une apparence spécifiquement à un type de composant comme suit :  

``` ts title="app.tsx"
components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#172325 ',
          color: '#007AFF',
          primary: '#FFFFFF',
          ':hover': {
            color: '#5C5757',
          },
        },
      },
    },
  },
```

!!! manuel  
    [Material UI - Button - CSS](https://mui.com/material-ui/api/button/#css)  

