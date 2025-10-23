# useContext  

Une façon de passer des données d'un élément parent vers un élément enfant est via les _props_.  Le flux normal de données dans React est de haut en bas. Les éléments en bas ne peuvent pas influencer les données venant de plus haut.  

Lorsque c'est requis pour un élément enfant d'influencer les données venant d'un parent, React offre une fonctionnalité qui se nomme __contexte__.  Le contexte rend possible la mise à jour d'états par tous les sous-éléments selon les besoins.  


!!! manuel  
    [useContext - Documentation](https://react.dev/reference/react/useContext)  


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

``` ts title="panier.context.tsx"
{!chapeaux/src/contexts/panier.context.tsx!}

```

``` ts title="App.tsx"
{!chapeaux/src/App.tsx!}
```

``` ts title="panier.component.tsx"
{!chapeaux/src/components/panier.component.tsx!}

```

``` ts title="fiche.component.tsx"
{!chapeaux/src/components/fiche.component.tsx!}
```

!!! codesandbox "CodeSandbox"  
    [Démo - Chapeaux en folie](https://codesandbox.io/p/sandbox/github/jaixan/developpementweb3/tree/main/code/chapeaux)  

## Se connecter à un API  

Il est préférable d’utiliser la librairie Axios pour aller chercher vos données de l’API :

``` ts title="fetch_bieres.ts"
axios.get('https://bieres.profinfo.ca/api/bieres').then((response) => {
  setListeBieres(response.data.bieres);
});
```

!!! manuel  
    [Axios - Documentation](https://axios-http.com/docs/intro)  



