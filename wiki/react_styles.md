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
{!personnage_styledComponents/src/components/personnage.styles.tsx!}
```

``` ts title="personnage.component.tsx"
{!personnage_styledComponents/src/components/personnage.component.tsx!}
```

!!! note "Truc"  
    Utilisation d’un style pour un autre type d’élément HTML avec la mention __as__ :  

    ``` ts 
    <PersonnageAddress as="span">{props.nom}</PersonnageAddress>
    ```

!!! codesandbox "CodeSandbox"  
    [Démo - Styled Components](https://codesandbox.io/p/sandbox/github/jaixan/developpementweb3/tree/main/code/personnage_styledComponents)  

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
{!personnage_MUI/src/components/personnage.component.tsx!}
```  

!!! codesandbox "CodeSandbox"  
    [Démo - Material UI](https://codesandbox.io/p/sandbox/github/jaixan/developpementweb3/tree/main/code/personnage_MUI)  

## Thèmes dans Material UI  

La manière la plus efficace pour changer l'apparence de votre application avec Material UI est l'utilisation de thèmes.  

!!! manuel 
    [Material UI - Theming](https://mui.com/material-ui/customization/theming/)  


La place idéale pour ajouter un thème à votre application est `App.tsx` :  

``` ts title="app.tsx"
{!personnage_MUI/src/App.tsx!}
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

