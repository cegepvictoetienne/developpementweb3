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

``` ts title="index.ts"  
{!express_intergiciel/index.ts!}

```

S'il y a un besoin de contrôler et même refuser l'exécution de routes, l'intergiciel peut courtcircuiter la chaîne comme suit :  

``` ts title="mini-securite.ts"  
const bloquerSiPasEtienne = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const nom = req.query.nom;
  console.log(nom);
  if (nom === 'Etienne') {
    next();
  } else {
    res.status(403).send('Erreur');
  }
};

app.use(bloquerSiPasEtienne);
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

``` ts title="utilisateurs.ts"
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

