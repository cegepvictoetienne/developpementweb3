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
La prochaine diapositive présente la définition d’un objet auteur. [MDN Author Model](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#author_model)  

## Schéma Mongoose - Auteur  

``` ts title="auteur.ts"
import { Schema, model } from 'mongoose';

export interface IAuteur {
    prenom: string;
    nom: string;
    date_naissance?: Date;
    date_deces?: Date;
};

const AuteurSchema = new Schema<IAuteur>({
    prenom: { type: String, required: true, maxlength: 100 },
    nom: { type: String, required: true, maxlength: 100 },
    date_naissance: Date,
    date_deces: Date,
});

export const Auteur = model<IAuteur>('Auteur', AuteurSchema);
```

!!! note

    Le premier paramètre de model<>() est le nom singulier de la collection de votre modèle. __Mongoose__ recherche automatiquement la version au __pluriel__ du nom comme nom de la collection. Par exemple, _Auteur_ aura la collection _auteurs_.  

## Les routes : Get - Tous  

``` ts title="route.ts"
import { IAuteur, Auteur } from '@src/models/Auteur';

import mongoose from 'mongoose';
/**
* Extraire tous les auteurs.
*
* @returns {IAuteur[]} Un tableau de tous les auteurs
*/
async function getAll(): Promise<IAuteur[]> {
    await mongoose.connect(process.env.MONGODB_URI!);
    const auteurs = await Auteur.find();
    mongoose.connection.close();
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
	await mongoose.connect(process.env.MONGODB_URI!);
	const auteur = await Auteur.findOne({
		id: id,
	});
	mongoose.connection.close();
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
    await mongoose.connect(process.env.MONGODB_URI!);
    const nouvelAuteur = new Auteur(auteur);
    await nouvelAuteur.save();
    mongoose.connection.close();
}


```

## Option strict  

!!! manuel 
    [Option strict par défaut](https://mongoosejs.com/docs/guide.html#strict)  
    