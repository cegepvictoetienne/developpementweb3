# Middleware (Intergiciel) Express 

Lorsque la requête arrive, elle passe à travers chaque intergiciel.  
L’intergiciel appelle le prochain avec next()  


``` mermaid
graph TD
  A[Client] -- req --> B[Intergiciel 1];
  B[Intergiciel 1] -- res --> A[Client];
  B[Intergiciel 1] -- req --> C[Intergiciel 2];
  C[Intergiciel 2] -- res --> B[Intergiciel 1];
  C[Intergiciel 2] -- req --> D["app.get()"];
  D["app.get()"] -- res --> C[Intergiciel 2];
 
```

``` ts title="intergiciel.ts"  
function historique(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(historique);

```

# Intergiciel - morgan  

Morgan est un intergiciel pour garder l’historique des requêtes traitées par votre serveur Express.

Pour l’installation :
``` nodejsrepl title="console"
npm install morgan @types/morgan
```

Pour l’utilisation :  

``` ts title="utilisation_morgan.ts"
import morgan from 'morgan’;

app.use(morgan('dev'));

```

!!! manuel  
    [Morgan - ExpressJS](https://expressjs.com/en/resources/middleware/morgan.html)  


# Intergiciel – express.json()  

Intergiciel pour transformer le json reçu du client en objet, remplace req.body.  

Utilisation :  

``` ts title="tableau_de_fruits.ts"
app.use(express.json());

app.post('/', (req: express.Request<Utilisateur>, res: express.Response) => {
    const nouvelUtilisateur: Utilisateur = {
        id: req.body.id,
        utilisateur: req.body.utilisateur,
        nom: req.body.nom,
        age: req.body.age,
    };
    listeUtilisateurs.push(nouvelUtilisateur);
    res.send(nouvelUtilisateur);
    console.log(nouvelUtilisateur);
});

```

!!! manuel  
    [express.json - ExpressJS](https://expressjs.com/en/api.html#express.json)  

