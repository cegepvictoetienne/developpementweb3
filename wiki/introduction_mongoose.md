# Introduction à Mongoose  

Mongoose est une bibliothèque JavaScript fréquemment utilisée dans une application Node.js exploitant une base de données MongoDB.  

Il fournit une solution simple permettant de modéliser les données dans vos applications en précisant les schémas à respecter.  

Mongoose est un ODM (Object Document Mapper), ce qui permet de traduire la notion d’objets en documents JSON.  

Depuis octobre 2020, Mongoose supporte également le langage TypeScript. ([Mongoose et TypeScript](https://mongoosejs.com/docs/typescript.html))  

!!! manuel 
    [Site officiel de Mongoose](https://mongoosejs.com/)  
    [Documentation de Mongoose](https://mongoosejs.com/docs/index.html)  

Vous trouverez sur Internet plusieurs tutoriels pour créer une application qui utilise Node.js, MongoDB et Mongoose. Les exemples présentés dans ces notes de cours sont inspirés de la marche à suivre présentée par [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)  ainsi que [celui-ci](https://medium.com/@alicantorun/build-a-rest-api-with-mongodb-mongoose-and-node-js-3a5afc4a0431).  


La première étape consiste à ajouter le module Mongoose à votre application :  

``` nodejsrepl title="console"
npm install mongoose
```

Vous devez ensuite définir le schéma des données à stocker dans une base de données MongoDB.   
Une pratique recommandée consiste à créer un dossier models dans lequel tous les schémas de votre application seront stockés
Voici la définition d’un objet auteur : [MDN Author Model](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#author_model)  

## Connexion à Mongoose  

``` ts title="index.ts"  
connect(ENV.Mongodb).then(() =>
  server.listen(ENV.Port, () => logger.info(SERVER_START_MSG)),
);

```
## Schéma Mongoose - Auteur  

``` ts title="auteur.ts"
import { Schema, model } from 'mongoose';


// Interface pour un auteur
// Notez l'utilisation de id au lieu de _id. Mongoose crée automatiquement un _id pour chaque document.
export interface IAuteur {
    id: string;
    prenom: string;
    nom: string;
    date_naissance?: Date;
    date_deces?: Date;
};


const AuteurSchema = new Schema<IAuteur>({
    id: { type: String, required: true, maxlength: 100 },
    prenom: { type: String, required: true, maxlength: 100 },
    nom: { type: String, required: true, maxlength: 100 },
    date_naissance: Date,
    date_deces: Date,
});

export const Auteur = model<IAuteur>('Auteur', AuteurSchema);
```

!!! note

    Le premier paramètre de model<>() est le nom singulier de la collection de votre modèle. __Mongoose__ recherche automatiquement la version au __pluriel__ du nom comme nom de la collection. Par exemple, _Auteur_ aura la collection _auteurs_. Pour empêcher que Mongoose n'utilise un mauvais pluriel (pensez Bijou qui devient Bijoux et non pas Bijous), faire la commande : `mongoose.pluralize(null);`   

## Les routes : Get - Tous  

``` ts title="route.ts"
import { IAuteur, Auteur } from '@src/models/Auteur';

import mongoose from 'mongoose';
const uri =
  'mongodb://localhost:27017/nom_bd?readPreference=primary&ssl=false';

/**
* Extraire tous les auteurs.
*
* @returns {IAuteur[]} Un tableau de tous les auteurs
*/
async function getAll(): Promise<IAuteur[]> {
    const auteurs = await Auteur.find();
    return auteurs;
}

```

## Les routes : Get - par Id  

``` ts title="route.ts"
/**
* Extraire un auteur.
*
* @param {string} id - ID de l'auteur à extraire
*
* @returns {IAuteur} - Un auteur si trouvé
*/

async function getOne(id: string,): Promise<IAuteur | null> {
	const auteur = await Auteur.findOne({
		id: id,
	});
	return auteur;
}

```

## Les routes : POST  

``` ts title="route.ts"
/**
* Ajouter un auteur.
* 
* @param {IAuteur} auteur - Auteur à ajouter
*/

async function add(auteur: IAuteur): Promise<void> {
    const nouvelAuteur = new Auteur(auteur);
    await nouvelAuteur.save();
}


```

## Option strict  

!!! manuel 
    [Option strict par défaut](https://mongoosejs.com/docs/guide.html#strict)  
    