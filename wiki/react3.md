# React Router  

Permettre de passer d’une page à l’autre dans votre application React.  

!!! manuel 
    [React Router](https://reactrouter.com/en/main)  


Pour l'installer dans votre projet :  

``` nodejsrepl title="console"
npm i react-router-dom
npm i @types/react-router-dom --save-dev
```
 
# Exemple de SPA avec Router  

``` ts title="app.tsx"
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
} from 'react-router-dom';

import './App.css';

function Modele() {
  return (
    <div>
      <a href="/">Page principale</a>&nbsp;
      <a href="/dadams">Douglas Adams</a>&nbsp;
      <a href="/oscard">Orson Scott Card</a>
      <br />
      <Outlet />
    </div>
  );
}
function PagePrincipale() {
  return <h1>Page principale</h1>;
}

function DouglasAdams() {
  return (
    <>
      <h1>Page de Douglas Adams</h1>&nbsp;
      <a href="/livre/1">Livre 1</a>&nbsp;
      <a href="/livre/2">Livre 2</a>&nbsp;
    </>
  );
}

function OrsonScottCard() {
  return <h1>Page de Orson Scott Card</h1>;
}

function Livre() {
  const { id } = useParams();
  return <h1>Livre #{id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Modele />}>
          <Route index element={<PagePrincipale />} />
          <Route path="dadams" element={<DouglasAdams />} />
          <Route path="oscard" element={<OrsonScottCard />} />
          <Route path="livre/:id" element={<Livre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

[CodeSandbox - monrouteur](https://codesandbox.io/p/sandbox/monrouteur-9w8fc4)  

# Différents éléments du projet monrouteur  

## BrowserRouter  

Un __<BrowserRouter\>__ stocke l'emplacement actuel dans la barre d'adresse du navigateur en utilisant des URL propres et navigue en utilisant la pile d'historique intégrée du navigateur.

``` ts title="app.tsx"
function App() {
  return (
    <BrowserRouter>
      // Le reste de l'application React
    </BrowserRouter>
  );
}
```

!!! manuel 
    [BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router)

## Routes  

L'élément __<Routes\>__ (au pluriel) indique l'ensemble des routes qui seront disponibles dans l'application.  Doit contenir au moins un élément __<Route\>__ (au singulier).  

``` ts title="app.tsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Modele />}/>
      </Routes>
    </BrowserRouter>
  );
}
```

## Route  

L'élément __<Route\>__ (au singulier) définit une page de l'application à afficher selon son URL.  

Par exemple :  

``` ts title="app.tsx"
     <Route path="/dadams" element={<DouglasAdams />} />
```

Cette route indique que http://serveur/dadams pointe sur la composante __DouglasAdams__.  

## Routes imbriquées  

L'élément __<Route\>__ (au singulier) peut contenir des routes enfants.  Comme ceci :  

``` ts title="app.tsx"
     <Route path="/" element={<Modele />}>
          <Route index element={<PagePrincipale />} />
          <Route path="dadams" element={<DouglasAdams />} />
          <Route path="oscard" element={<OrsonScottCard />} />
          <Route path="livre/:id" element={<Livre />} />
        </Route>
```  

Plusieurs choses importantes ici :  

- La route "/" est la route parent des autres.  Lorsqu'un élément est mentionné dans la route parent, l'élément est généré avant celui de la route enfant.  Il faut par contre indiquer dans l'élément parent à quel endroit faut-il générer l'élément enfant (avec l'élément __<Outlet\>__) :   

    ``` ts title="app.tsx"
        function Modele() {
        return (
            <div>
            <a href="/">Page principale</a>&nbsp;
            <a href="/dadams">Douglas Adams</a>&nbsp;
            <a href="/oscard">Orson Scott Card</a>
            <br />
            <Outlet />
            </div>
        );
        }
    ```  

- Le mot clé __index__ indique l'élément qui sera généré lorsque l'utilisateur navigue à l'URL du parent.  

## Routes dynamiques  

On peut placer un paramètre dans une route qui peut être lu par l'élément généré.  

Dans la route, on peut avoir le paramètre __:id__ :  

``` ts title="app.tsx"
<Route path="livre/:id" element={<Livre />} />
```  

Dans l'élément, on accède au paramètre avec la fonction __useParams()__ :  

``` ts title="app.tsx"
    function Livre() {
        const { id } = useParams();
        return <h1>Livre #{id}</h1>;
    }
```  

# useContext  

Une façon de passer des données d'un élément parent vers un élément enfant est via les _props_.  Le flux normal de données dans React est de haut en bas. Les éléments en bas ne peuvent pas influencer les données venant de plus haut.  

Lorsque c'est requis pour un élément enfant d'influencer les données venant d'un parent, React offre une fonctionnalité qui se nomme __contexte__.  Le contexte rend possible la mise à jour d'états par tous les sous-éléments selon les besoins.  

Prenons l'exemple suivant :  

``` mermaid
graph TD
  A[Home] --> B[Panier];
  A[Home] --> C[Fiche];
  B[Panier] --> D[Fiche];
 
```

L'élément __Home__ a un panier contenant les items désirés par l'utilisateur. L'élément __Fiche__ représente un item avec une photo, une description et un prix.  L'élément __Panier__ contient les fiches des items ajoutés par l'utilisateur.  

Si nous voulons que le bouton __Ajouter au panier__ de l'élément __Fiche__ puisse influencer le contenu du __Panier__, il faut créer un __contexte__ :  


``` mermaid
graph TD
  Z[ContextePanier] --> A[Home];
  A[Home] --> B[Panier];
  A[Home] --> C[Fiche];
  B[Panier] --> D[Fiche];
 
```

Tous les éléments sous __ContextePanier__ peuvent accèder au contenu et le modifier au besoin.  Dans cette situation, la liste des items au panier vient du contexte et est utilisé dans l'élément __Panier__ alors que __Fiche__ s'ajoute ou se retire du panier via le contexte.  

## Démo de useContext  

Voici les éléments pertinents pour l'utilisation de contexte :  

``` ts title="panier.contexte.tsx"
import React, { useState } from 'react';

interface IItemPanier {
  id: number;
  nom: string;
  photo: string;
  prix: number;
  quantite: number;
}

export type PanierContextType = {
  itemsPanier: IItemPanier[];
  panierOuvert: boolean;
  setItemsPanier: (itemsPanier: IItemPanier[]) => void;
  setPanierOuvert: (ouvert: boolean) => void;
};

const panierVide: IItemPanier[] = [];

export const PanierContext = React.createContext<PanierContextType>({
  itemsPanier: panierVide,
  panierOuvert: false,
  setItemsPanier: (itemsPanier: IItemPanier[]) => {},
  setPanierOuvert: (ouvert: boolean) => {},
});

export default function PanierProvider(props: any) {
  const [itemsPanier, setItemsPanier] = useState(panierVide);
  const [panierOuvert, setPanierOuvert] = useState(false);

  const values = {
    itemsPanier,
    panierOuvert,
    setItemsPanier,
    setPanierOuvert: setPanierOuvert,
  };
  return (
    <PanierContext.Provider value={values}>
      {props.children}
    </PanierContext.Provider>
  );
}

```

``` ts title="app.tsx"
import './App.css';
import PanierProvider from './contexts/panier.context';
import Home from './components/home.component';

function App() {
  return (
    <PanierProvider>
      <Home />
    </PanierProvider>
  );
}

export default App;
```

``` ts title="panier.component.tsx"
import React, { useContext } from 'react';
import { Drawer } from '@mui/material';
import { PanierContext } from '../contexts/panier.context';
import Fiche from './fiche.component';
import { Box } from '@mui/material';

export default function Panier() {
  const { itemsPanier, setItemsPanier, panierOuvert, setPanierOuvert } =
    useContext(PanierContext);
  return (
    <Drawer
      anchor="right"
      open={panierOuvert}
      onClose={() => {
        setPanierOuvert(false);
      }}
    >
      <Box sx={{ width: 300 }}>
        {itemsPanier &&
          itemsPanier.map((item) => {
            return <Fiche chapeau={item} dansPanier={true} />;
          })}
      </Box>
    </Drawer>
  );
}

```

``` ts title="fiche.component.tsx"
import { useContext } from 'react';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { PanierContext } from '../contexts/panier.context';
import { IChapeau } from '../models/ichapeau.model';

interface IFiche {
  chapeau: IChapeau;
  dansPanier: boolean;
}

export default function Fiche(props: IFiche) {
  const { itemsPanier, setItemsPanier } = useContext(PanierContext);

  const ajouterAuPanier = () => {
    const nouveauPanier = [...itemsPanier, { ...props.chapeau, quantite: 1 }];
    console.log(nouveauPanier);
    setItemsPanier(nouveauPanier);
  };

  const retirerDuPanier = () => {
    var i = 0;
    console.log('retirer du panier : ', props.chapeau.id);
    while (i < itemsPanier.length) {
      if (itemsPanier[i].id === props.chapeau.id) {
        itemsPanier.splice(i, 1);
      } else {
        ++i;
      }
    }
    const nouveauPanier = [...itemsPanier];
    setItemsPanier(nouveauPanier);
  };

  return (
    <Card sx={{ width: 300, maxWidth: 300, height: 300, maxHeight: 300 }}>
      <CardMedia
        component="img"
        height="150"
        sx={{ objectFit: 'contain' }}
        image={props.chapeau.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.chapeau.nom}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.chapeau.prix}&nbsp;$
        </Typography>
      </CardContent>
      <CardActions>
        {!props.dansPanier && (
          <Button
            size="small"
            color="primary"
            onClick={(e: React.MouseEvent) => ajouterAuPanier()}
          >
            Ajouter au panier
          </Button>
        )}
        {props.dansPanier && (
          <Button
            size="small"
            color="primary"
            onClick={(e: React.MouseEvent) => retirerDuPanier()}
          >
            Retirer du panier
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
```

[CodeSandbox - Chapeaux en folie](https://codesandbox.io/p/sandbox/chapeaux-q8fdtk)  

## Se connecter à un API  

Il est préférable d’utiliser la librairie Axios pour aller chercher vos données de l’API :

``` ts title="fetch_bieres.ts"
axios.get('https://bieres.professeur.tech/api/bieres').then((response) => {
  setListeBieres(response.data.bieres);
});
```

