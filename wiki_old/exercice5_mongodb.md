# Exercice 5 - Mongo DB  

Modèle de données : [persons.json](donnees/persons.json)  

- Partez du modèle persons.json.  
- Créez un service web intégrant les 4 méthodes de base (CRUD) avec l’ensemble des attributs.   
- Assurez-vous que les données sont adéquatement stockées (avec les bons types) et que la structure est conforme.   
- Attributs obligatoires :   
    - name (first et last)  
    - age  
    - isActive  
    - registered  
    - Balance  
- Vous devez aussi valider les champs facultatifs.   
- Ajoutez d’autres routes :  
    - /persons/? : permet de récupérer les informations d’une seule personne à partir de son identifiant  
    - /persons/q/? : permet de rechercher l’information dans les attributs nom, prénom et courriel  
    - /persons/stats/eyeColor : permet d’obtenir le nombre de personnes par couleur des yeux  
    - /persons/stats/balance/?/? : permet d’obtenir la balance moyenne des personnes entre x et y années   
 