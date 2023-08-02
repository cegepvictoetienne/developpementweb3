# React Router  

Permettre de passer d’une page à l’autre dans votre application React.  


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
