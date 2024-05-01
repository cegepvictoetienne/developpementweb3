# Projet intégrateur (50%)  


## Mise en contexte  
Votre travail consiste à concevoir une application web qui interagit avec des données par une interface applicative (API).  
Vous devez choisir un projet de votre choix qui doit cependant être préalablement approuvé par l’enseignant. Vous êtes responsable de vous assurer que votre projet respecte les consignes demandées.  

Le projet est divisé en 3 parties :  

1.	Base de données : 10% de l’épreuve finale  
2.	Interface applicative (API) : 40% de l’épreuve finale  
3.	Application: 50% de l’épreuve finale   


Voici les règles à respecter pour chacune des parties :  

1.	Base de données : 

    - Base de données NoSQL (MongoDB, Neo4j, etc.)
        - Minimum 12 propriétés
        - Au moins une propriété de chacun de ces types :  
            - String  
            - Number  
            - Date  
            - Bool  
            - Tableau de types natifs (string, number, etc.)  
            - Tableau d'objets  
        - Possibilité d’utiliser plusieurs collections (recommandé pour les modèles plus avancés)  
    - Jeu de données test  
    - Publication de la base de données  

2.	Interface applicative (API) :

    - Robuste (validation et messages d’erreur personnalisées, en français)  
    - Sécuritaire  
    - Implémente méthodes HTTP ciblées : 
        - GET 
            - GET ALL
            - GET by ID
            - GET avec Filtres (__au moins 2__)
            - GET – Stats (__transformation des données – au moins 2__)
        - POST   
        - PUT et/ou PATCH  
        - DELETE  
    - Validations appropriées :  
        - Champs requis  
        - Types  
        - Tailles et intervalles (min, max, longueur du tableau)  
        - Messages personnalisés en français  
        - Au moins 2 validations personnalisées  
    - Documentation : toutes les routes doivent être documentées sur la page d’accueil de l’api (exemple : [Google Classroom REST API](https://developers.google.com/classroom/reference/rest/) )  
    - Publication de l’API (Netlify ou autre)  

3.	Application :  

    - Approche « mobile first », idéalement responsive, minimalement correctement affichée sur 3 résolutions d’écran (mobile, tablette et pc). 
    - À l’aide de React fonctionnel.  
    - Décomposée en minimum 5 composants (ou l’équivalent)  
    - Internationalisée (minimum 2 langues)  
    - Interactions avec toutes les méthodes HTTP implémentées par l’API  
    - Utilisation de formulaires lorsque nécessaire (minimum 1 formulaire, 5 champs)    
    - Avec validations adéquates et cohérentes avec les validations serveur. Les messages issus des validations doivent être affichés à l’utilisateur.   
    - Minimum 2 composants utilisés à des fins d’affichage  
    - Authentification obligatoire pour certaines fonctionnalités ciblées (minimum 1), adaptée à la réalité du projet. L’authentification peut être intégrée dans l’API ou comme serveur tiers.  
    - Configuration en tant qu’application progressive
    - Publication de l’application (Netlify, GitHub Pages ou autre)  

# Remise  
- Le projet doit être remis avant le 15 décembre 2024 à 23h59  
- À remettre sur Teams :  

    - Lien GitHub (dépôt public ou privé*) de l’API.  
    - Ajouter un dossier Dev contenant le script de la base de données (scripts de création au besoin et scripts de données de test)  
    - Le fichier README doit contenir les informations suivantes :  
        - Procédure d’installation de l’API sur un poste local  
        - Type de base de données et procédure de création de la base de données.   
        - URL de l’API publiée  
- Lien GitHub (dépôt public ou privé*) de l’application.   
- Le fichier README doit contenir les informations suivantes :  
    - Procédure d’installation de l’application sur un poste local  
    - Description sommaire de de l’application publiée  
    - Informations d’authentification  

*Si dépôt privé, envoyer une invitation de collaboration à rivard.etienne@cegepvicto.ca  

# Grille de correction  
