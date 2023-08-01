# Mongoose - La suite  

## Schéma  

- Schéma : Permet de définir la structure du document attendu  
- SchemaTypes : Permet de définir le type des propriétés   
- Modèles : Constructeurs élaborés à partir d’un schéma  
- Documents : Instance d’un modèle  
- SubDocuments : Documents imbriqués  


Lors le schéma attendu contient des propriétés imbriquées, il est possible de définir le schéma de 2 façons différentes :  

=== "Imbriqué"  

    ``` ts title="imbrique.ts"
    const parentSchema = new Schema({ 
    children: [{ name: 'string' }], 
    child: { name: 'string' }
    }); 
    ```

=== "2 déclarations"  

    ``` ts title="deux_declarations.ts"
    const childSchema = new Schema({ name: 'string' });
    
    const parentSchema = new Schema({ 
        // Array of subdocuments 
        children: [childSchema], 
        // Single nested subdocuments. Caveat: 
        // single nested subdocs only work 
        // in mongoose >= 4.2.0 
        child: childSchema
    }); 

    ```

!!! note

    Il est aussi possible de définir les schémas dans des fichiers distincts. 

## Options de schémas  

Plusieurs options sont disponibles lors de l’établissement du Schéma : [Guide - Options](https://mongoosejs.com/docs/guide.html#options)  

Voici les principales à connaître :  

- [collection](https://mongoosejs.com/docs/guide.html#collection) : Passe par défaut le nom du modèle. Il est possible de le redéfinir au besoin.  
- [_id](https://mongoosejs.com/docs/guide.html#_id) : La propriété _id est gérée automatiquement par Mongoose. Il est possible de modifier l’_id par défaut dans des situations particulières seulement.  
- [strict](https://mongoosejs.com/docs/guide.html#strict) : Il est possible de faire une validation moins stricte d’un document lors de l’ajout et l’édition.  

!!! note  

    Any key/val set on the instance that does not exist in your schema is always ignored, regardless of schema option.

## Validations avancées  

Mongoose offre plusieurs validations de base :  

- Champs requis  
- Type  
- Longueur  
- Min, Max  

Il est cependant possible d’ajouter une multitude de validations supplémentaires. Par exemple :   
- Longueur minimale d’un tableau  
- Énumération des valeurs possibles  
- Validations de chaînes de caractères ([String-validators](https://mongoosejs.com/docs/schematypes.html#string-validators))   
- Validations personnalisées  

Pour plus d'information :  

- [Mongoose - Validations](https://mongoosejs.com/docs/validation.html)  

## Messages personnalisés  

Mongoose va produire des messages par défaut.  

Il est aussi possible de les redéfinir.  

Pour plus d'information :  

- [Mongoose - Messages d'erreur personnalisés](https://mongoosejs.com/docs/validation.html#custom-error-messages)  

## Virtual  

__Virtuals__ : propriétés pouvant être utilisées dans votre schéma mais qui ne sont pas conservées dans la base de données.  

Les getters sont souvent utilisés pour combiner plusieurs propriétés.  
Les setters sont souvent utilisés pour décomposer une valeur en plus petites.   

Exemples :  

``` ts title="get_seulement.ts"
personSchema.virtual('fullName').get(function() { 
  return this.name.first + ' ' + this.name.last; 
}); 

```


``` ts title="get_et_set.ts"
personSchema.virtual('fullName'). 
  get(function() { 
    return this.name.first + ' ' + this.name.last; 
  }). 
  set(function(v) { 
    this.name.first = v.substr(0, v.indexOf(' ')); 
    this.name.last = v.substr(v.indexOf(' ') + 1); 
  }); 

```

Pour plus d'information :  

- [Guide - Virtuals](https://mongoosejs.com/docs/guide.html#virtuals)   
- [Tutoriel - Virtuals](https://masteringjs.io/tutorials/mongoose/virtuals)  

## Aggrégation  

La bibliothèque Mongoose permet également de transformer des documents à l’aide de la méthode aggregate : [Mongoose - Aggregate](https://mongoosejs.com/docs/api/aggregate.html)  

``` ts title="aggregations.ts"
try {    
  const personnes = await Personne.aggregate([
    {"$match": {"isActive": true}}, 
    {"$group": {
        "_id":"$eyeColor", 
        "moyenneAge": {"$avg": "$age"}
      }
    }, 
    {"$sort": {"moyenneAge": 1}}
  ]);
  res.json(personnes);
} 

```


## REST – PUT  

La méthode HTTP PUT crée une nouvelle ressource ou remplace une représentation de la ressource ciblée par le contenu de la requête.  

La différence entre PUT et POST tient au fait que PUT est une méthode {==idempotente==}. Une requête PUT, envoyée une ou plusieurs fois avec succès, aura toujours le même effet (il n'y a pas d'effet de bord). À l'inverse, des requêtes POST successives et identiques peuvent avoir des effets additionnels, ce qui peut revenir par exemple à passer plusieurs fois une commande.  

Pour plus d'informations :  

- [MDN - PUT](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/PUT)  

|Expression|Valeur  
|--|--  
|La requête a un corps de message (body)|Oui  
|Une requête traitée avec succès retourne une réponse avec un corps de message (body)|Non  
|Sûre|Non  
|Idempotente|__Oui__  
|Peut être mise en cache|Non  
|Autorisée dans les formulaires HTML|Non  

## REST - PATCH  

La méthode PATCH d'une requête HTTP applique des {==modifications partielles==} à une ressource.  

La méthode HTTP PUT est déjà définie pour écraser une ressource avec un nouveau corps complet de message, et pour la méthode HTTP POST, il n'existe aucun moyen standard pour découvrir le support de format de patch. Tout comme POST, la méthode HTTP PATCH n'est pas listée comme étant idempotent, contrairement à PUT. Cela signifie que les requêtes patch identiques et successives auront des effets différents sur l'objet manipulé.  

Pour plus d'informations :   

- [MDN - PATCH](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/PATCH)  

|Expression|Valeur  
|--|--  
|La requête a un corps de message (body)|Oui  
|Une requête traitée avec succès retourne une réponse avec un corps de message (body)|Non  
|Sûre|Non  
|Idempotente|Non  
|Peut être mise en cache|Non  
|Autorisée dans les formulaires HTML|Non  


