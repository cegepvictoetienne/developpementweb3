# Internationalisation  


- Pas tous les utilisateurs de votre application parlent français.  
- On doit « _softcoder_ » tout le texte de l’application pour l’afficher dans la langue de l’utilisateur.  
- Ce n’est pas seulement le texte qui doit être localisé mais aussi :  

    - Les dates
    - L’heure
    - Les montants d’argent
    - Les pourcentages
    - Le singulier et le pluriel des mots
    - Les guillemets

# React et l’internationalisation  

- Plusieurs modules existent pour internationaliser React  
- Dans ce cours, nous allons utiliser __React-Intl__  

Pour installer React-Intl :  

``` nodejsrepl title="console"
npm install react-intl
```

!!! manuel 
    [React-intl](https://formatjs.io/docs/react-intl/)  

# Installation minimale dans React  

1. Créer un dossier __lang__ sous __src__
1. Créer un fichier json nommé __fr.json__
1. Ajoutez vos clés de traductions comme ceci :  

    ``` json
    {
        "app.titre": "Titre de l'application"
    }
    ```

1. Important de bien nommer les clés, pour donner le plus de contexte possible à l’équipe de traduction. Par exemple, le texte à l’intérieur d’un input pourrait avoir la clé suivante :

    ``` json
    {
        "formulaireajout.commentaire.placeholder": "Entrer un commentaire"
    }
    ```

# Code minimal  

``` ts title="main.tsx"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { IntlProvider } from 'react-intl';
import Francais from './lang/fr.json';

const locale = 'fr';
const messages = Francais;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
```

## Message traduit simple  

``` ts 
<FormattedMessage id="app.titre" defaultMessage="Titre" />
```

!!! manuel 
    [FormattedMessage](https://formatjs.io/docs/react-intl/components#formattedmessage)  


## Message avec variable  

``` json title="lang/fr.json"  
{
    "app.clics.label": "Il y a eu {nombreclics} clics"
}
```

``` ts title="app.tsx"
<FormattedMessage
    id="app.clics.label"
    defaultMessage="Titre"
    values={{ nombreclics: count }}
/>
```

## Pour traduire du texte avec la possibilité de pluriel  

``` json title="lang/fr.json"  
{
  "app.clics.pluriel.label": "{nombreclics, plural,=0 {Il n'y a pas eu de clic} one {Il y a eu un clic} other {Il y a eu {nombreclics} clics}}"
}
```

``` ts title="app.tsx"
<FormattedMessage
    id="app.clics.pluriel.label"
    defaultMessage="Titre"
    values={{ nombreclics: count }}
/>
```

!!! manuel 
    [Format des messages](https://unicode-org.github.io/icu/userguide/format_parse/messages/)  


## Pour formater une date dans le format de la langue cible  

``` ts title="app.tsx"
const maintenant = new Date();

<FormattedDate
    value={maintenant}
    year="numeric"
    month="long"
    day="2-digit"
/>
```

!!! manuel 
    [FormattedDate](https://formatjs.io/docs/react-intl/components#formatteddate)  

## Pour formatter l’heure dans le format de la langue cible  

``` ts title="app.tsx"
const maintenant = new Date();
const heure = maintenant.getTime();

<FormattedTime value={heure} />
<br />
<FormattedTime value={heure} timeZone="America/Vancouver" />

```

!!! manuel 
    [FormattedTime](https://formatjs.io/docs/react-intl/components#formattedtime)  

## Pour formater une devise (monétaire)  

``` ts title="app.tsx"
const prix = 12.35;

<FormattedNumber
    value={prix}
    style="currency"
    currency="CAD"
    currencyDisplay="symbol"
/>

```

!!! manuel 
    [FormattedNumber](https://formatjs.io/docs/react-intl/components#formattednumber)  

## Pour formater un pourcentage  

``` ts title="app.tsx"
const rabais = 15 / 100;

<FormattedNumber value={rabais} style="percent" />


```

[CodeSandbox - Intl](https://codesandbox.io/p/sandbox/intl-2wztzk)  

# Sélecteur de langue  

Maintenant que le texte est traduit, voici ce qu'il faut faire pour changer la langue dynamiquement :  

1. Créer un contexte pour la langue  
2. Ajouter une fonction pour changer la langue dans le contexte  
3. Créer un provider pour le contexte  
4. Utiliser le contexte dans le composant qui aura le sélecteur  
5. Créer un sélecteur de langue et appeler la fonction pour changer la langue  

!!! note  
    Je laisse ce point sans démonstration, un petit défi pour l'exercice qui s'en vient!  
