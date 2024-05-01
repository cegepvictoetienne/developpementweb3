# React Router  

Permettre de passer d’une page à l’autre dans votre application React.  

!!! manuel 
    [React Router](https://reactrouter.com/en/main)  


Pour l'installer dans votre projet :  

``` nodejsrepl title="console"
bun i react-router-dom
bun i @types/react-router-dom --save-dev
```
 
# Exemple de SPA avec Router  

``` ts title="App.tsx"
{!monrouteur/src/App.tsx!}
```

!!! codesandbox "CodeSandbox"  
    [Démo - monrouteur](https://codesandbox.io/p/sandbox/github/jaixan/developpementweb3/tree/main/code/monrouteur)  

# Différents éléments du projet monrouteur  

## BrowserRouter  

Un __<BrowserRouter\>__ stocke l'emplacement actuel dans la barre d'adresse du navigateur en utilisant des URL propres et navigue en utilisant la pile d'historique intégrée du navigateur.

``` ts title="App.tsx"
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

!!! manuel  
    [Route - Documentation](https://reactrouter.com/en/6.14.2/route/route)  


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
axios.get('https://bieres.professeur.tech/api/bieres').then((response) => {
  setListeBieres(response.data.bieres);
});
```

!!! manuel  
    [Axios - Documentation](https://axios-http.com/docs/intro)  



