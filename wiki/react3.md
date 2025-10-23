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

