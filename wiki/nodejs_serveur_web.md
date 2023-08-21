# Introduction à Node.js – Serveur Web  

## Étapes pour afficher une page web  (architecture client-serveur)  
1. Créer le serveur
2. Exécuter la commande node fichier.ts pour exécuter le code
    1. cmd
    2. cd “répertoire du serveur”
    3. node nomdufichieraexecuter.ts
3. Lancer le navigateur : http://localhost:####/ (#### : # du port sélectionné)

!!! manuel  
    [node.js - faire son premier serveur Web](https://nodejs.org/fr/docs/guides/getting-started-guide)  

!!! note  
    N'oubliez pas d'installer @types/node pour que TypeScript reconnaisse les modules standards nodejs.  


## Créer un serveur  

``` ts title="simple_serveur.ts"  
{!simple_server.ts!}
```

## URL / Paramètres  

<figure markdown>
  ![node_url](images/node_url.png){ width="600" }
  <figcaption>Comment extraire les parties d'un URL</figcaption>
</figure>


## URL  

Sans module, il faut _tout_ coder à la main (bas niveau!)  

``` ts title="serveur_sans_module.ts"
import http from 'http';
import url from 'url';

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 
    console.log(url);
    var page = url.parse(req.url, true).pathname;
    if (page == '/') {
        res.write('Bienvenue au jeu d\'évasion entrez dans la salle de regroupement.');
    } else if (page == '/salle-serveurs') {
        res.write('Vous êtes dans la salles des serveurs, bonne chance !');
    } else if (page == '/etage/1/prof') {
        res.write('Hé ho, que faîtes-vous dans mon bureau !?!?!');
    } else  {
        res.statusCode = 404;
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

## Paramètres  

Fonctionnement semblable pour les paramètres :  

``` ts title="serveur_sans_module.ts"  
import http from 'http';
import url from 'url';

const hostname = 'localhost';
const port = 3000;
const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        
        var params = new URLSearchParams(url.parse(req.url, true).query);
        console.log(params);
        if (params.has('prenom') && params.has('nom')) {
            res.write('Vous vous appelez ' + params.get('prenom') + ' ' + params.get('nom'));
        }
        else {
            res.write('Vous devez bien avoir un prénom et un nom, non ?');
        }
        res.end();
    }
);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

```

# Internationalisation – les devises  

``` ts title="format_devise.ts"
const formatter = new Intl.NumberFormat('fr-CA', 
    {
        style: 'currency',
        currency: 'CAD',
    }
);

const prix = 3.75;

console.log(`le prix est ${formatter.format(prix)}`);
```  

