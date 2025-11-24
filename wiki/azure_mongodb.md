# Déploiement de la base de données MongoDB dans Azure

# 1 - Aller sur le portail Azure  

[portail Azure](https://portal.azure.com)  


# 2 - Créer la ressource Cosmos DB  

![Azure Cosmos DB Créer](./images/azure_cosmosdb_creer.png)  

# 3 - Choisir MongoDB  

![Azure Cosmos DB Choisir MongoDB](./images/azure_cosmosdb_choisir_mongodb.png)   

# 4 - Choisir vCore Cluster  

![Azure Cosmos DB Choisir vCore](./images/azure_cosmosdb_vcore.png)   


# 5 - Créer un groupe de ressources (resource group)  

![Azure Cosmos DB nouveau groupe 1](./images/azure_cosmosdb_nouveau_ressources.png)  

# 6 - Nommer le groupe et faire OK  

![Azure Cosmos DB nouveau groupe 1](./images/azure_cosmosdb_nouveau_groupe_detail.png)  


# 7 - Remplir le reste du formulaire  

![Azure Cosmos DB reste formulaire](./images/azure_cosmosdb_reste_formulaire.png)  


1- Nom du cluster : mettez un nom significatif pour le retrouver plus tard.  
2- Activer le forfait gratuit (__free tier__) : Important pour ne pas payer!  
3- Utilisateur : Le code utilisateur qui sera utilisé pour se connecter à la base de données.  
4- Mot de passe :   Le mot de passe qui sera utilisé pour se connecter à la base de données.  

# 8 - Passer à la configuration de la réseautique  

![Azure Cosmos DB reste formulaire](./images/azure_cosmosdb_fin_page_1.png)  

# 9 - Configurer la réseautique  

![Azure Cosmos DB reste formulaire](./images/azure_cosmosdb_reseau.png)  


# 10 - Lancer la révision  

![Azure Cosmos Lancer review](./images/azure_cosmosdb_lancer_review.png)   

## 11 - Trouver la chaine de connexion  

![Azure Cosmos chaine 1](./images/azure_cosmosdb_chaine1.png)

![Azure Cosmos chaine 2](./images/azure_cosmosdb_chaine2.png)

## 12 - Importer vos données  

Utilisez la commande `mongoimport` pour importer vos données dans la BD Azure.  

``` noderepl  
mongoimport --uri "mongodb://utilisateur:motdepasse@votreurlmongodb.mongo.cosmos.azure.com:10255/votre_bd?tls=true" --collection votre_collection --type json --file /chemin/vers/votre/fichier.json
```   










