# Styles : React et Material UI 

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

``` ts title="Personnage.tsx"
{!personnage_MUI/src/components/Personnage/Personnage.tsx!}
```  

!!! codesandbox "CodeSandbox"  
    [Démo - Material UI](https://codesandbox.io/p/sandbox/github/jaixan/developpementweb3/tree/main/code/personnage_MUI)  

## Thèmes dans Material UI  

La manière la plus efficace pour changer l'apparence de votre application avec Material UI est l'utilisation de thèmes.  

!!! manuel 
    [Material UI - Theming](https://mui.com/material-ui/customization/theming/)  


La place idéale pour ajouter un thème à votre application est `App.tsx` :  

``` ts title="app.tsx"
{!personnage_MUI/src/components/App/App.tsx!}
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

