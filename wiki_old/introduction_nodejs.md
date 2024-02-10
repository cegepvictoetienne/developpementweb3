# Introduction à Node.js – La base

!!! note

    La programmation node est une programmation de **bas niveau**. C’est au programmeur de “coder” son serveur. On peut s’en servir pour exécuter du code JavaScript sur un serveur, pour afficher une page web ou dans tout autre contexte d’architecture type client-serveur (par exemple, un chat, un web socket ou un API). 

# Installation de node

- Node.js : {==LTS Version 18.17.1==}  
- [Téléchargement Node.js](https://nodejs.org/fr/download)  


# Code JavaScript sur un serveur

- Étapes pour coder sur un serveur (le code est exécuté sur la machine où le fichier est stocké)
    - Créer un fichier .js
    - Exécuter la commande node nomdufichieraexecuter.js pour exécuter le code
        - cmd
        - cd “répertoire du serveur”
        - node nomdufichieraexecuter.js


``` ts title="tableau_de_fruits.js"
console.log(
  'J’écris directement dans la console! Je peux faire du code qui ne s’exécute que sur le serveur'
);

var fruits = ['pomme', 'orange', 'banane'];


fruits.forEach(afficherElementTableau);

/*
* Affiche à la console un élément du tableau
*
* @param item - L'item à afficher
* @param index - La position de l'item dans le tableau
*/
function afficherElementTableau(item, index) {
  console.log(index + ':' + item);
}
```

``` nodejsrepl title="Résultat dans la console"
> node tableau_de_fruits.js
J’écris directement dans la console! Je peux faire du code qui ne s’exécute que sur le serveur  
0:pomme
1:orange
2:banane
```

!!! manuel  
    [Documentation officielle node.js](https://nodejs.org/fr/docs)  

