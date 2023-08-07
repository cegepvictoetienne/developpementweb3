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
    - Utilisation d’au minimum 2 propriétés virtuelles (ou l’équivalent)  
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
    - Avec validations adéquates et cohérentes avec les validations serveur   
    - Minimum 2 composants utilisés à des fins d’affichage  
    - Authentification obligatoire pour certaines fonctionnalités ciblées (minimum 1), adaptée à la réalité du projet. L’authentification peut être intégrée dans l’API ou comme serveur tiers.  
    - Configuration en tant qu’application progressive
    - Publication de l’application (Netlify, GitHub Pages ou autre)  

# Remise  
- Le projet doit être remis avant le 15 décembre 2023 à 23h59  
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
Élément|Excellent|Satisfaisant|Minimal|Faible|Insuffisant
--|--|--|--|--|--
__Base de données (10%)__ {: colspan=5}||&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}
Choix|||Le choix du SGBD est pertinent. <br/><br/>2 points|Le choix du SGBD n’est pas optimal. <br/><br/>1 point|Le choix du SGBD n’est pas du tout approprié.<br/><br/>0 point
Schéma|Le schéma de la base de données répond totalement aux exigences demandées. <br/><br/>4 points|Un ou 2 éléments du schéma ne répondent pas aux exigences demandées<br/><br/>3 points|3 à 5 éléments du schéma ne répondent pas aux exigences demandées<br/><br/>1 point||Plus de 5 éléments ne répondent pas aux exigences demandées<br/><br/>0 point
Publication|||Le base de données est publiée. <br/><br/>2 points||La base de données n’est pas publiée<br/><br/>0 point
Jeu de tests|Le jeu de données de permet de tester l’ensemble des fonctionnalités.<br/><br/>2 points||Le jeu de données de permet de tester partiellement les fonctionnalités.<br/><br/>1 point||Le jeu de données de permet de tester moins de 25% des fonctionnalités.<br/><br/>0 point
__Interface applicative (API) (40%)__ {: colspan=5}||&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}
Méthodes HTTP|L’interface applicative implémente __correctement l’ensemble__ des méthodes HTTP demandées. <br/>(GET, POST, PUT, PATCH, DELETE)<br/><br/>8 points|L’interface applicative implémente __correctement 75%__ des méthodes HTTP demandées.  <br/>(GET, POST, PUT, PATCH, DELETE)<br/><br/>6 points|L’interface applicative implémente __correctement 50%__ des méthodes HTTP demandées. <br/>(GET, POST, PUT, PATCH, DELETE)<br/><br/>4 points|L’interface applicative implémente __correctement 25%__ des méthodes HTTP demandées. <br/>(GET, POST, PUT, PATCH, DELETE)<br/><br/>2 points|L’interface applicative implémente __moins de 25%__ des méthodes HTTP demandées. <br/> (GET, POST, PUT, PATCH, DELETE)<br/><br/>0 point
GET avec filtre|L’interface applicative implémente correctement un minimum de 2 méthodes GET avec filtres. Ces requêtes sont pertinentes au projet.  <br/><br/>4 points|L’interface applicative implémente partiellement un minimum de 2 méthodes GET avec filtres. Ces requêtes sont pertinentes au projet.  <br/><br/>3 points|L’interface applicative implémente partiellement moins de 2 méthodes GET avec filtres. Ces requêtes sont peu pertinentes au projet.  <br/><br/>2 points||L’interface applicative n’implémente pas correctement de méthodes GET avec filtres, ou ces requêtes ne sont pas pertinentes au projet<br/><br/>0 point
GET avec transformation|L’interface applicative implémente correctement un minimum de 2 méthodes GET avec transformations. Ces requêtes sont pertinentes au projet.  <br/><br/>4 points|L’interface applicative implémente partiellement un minimum de 2 méthodes GET avec transformations. Ces requêtes sont pertinentes au projet.  <br/><br/>3 points|L’interface applicative implémente partiellement moins de 2 méthodes GET avec transformations. Ces requêtes sont peu pertinentes au projet.  <br/><br/>2 points||L’interface applicative n’implémente pas correctement de méthodes GET avec transformations, ou ces requêtes ne sont pas pertinentes au projet<br/><br/>0 point
Propriétés virtuelles|L’interface applicative implémente correctement un minimum de 2 propriétés virtuelles (ou l’équivalent). <br/><br/>2 points||L’interface applicative implémente correctement une propriété virtuelle (ou l’équivalent). <br/><br/>1 point||L’interface applicative n'implémente pas correctement un minimum de 2 propriétés virtuelles (ou l’équivalent). <br/><br/>0 point
Validations natives|L’interface applicative contient des __validations natives__ appropriées aux données représentées dans le schéma.<br/><br/>4 points||L’interface applicative contient des __validations natives__ partiellement appropriées aux données représentées dans le schéma<br/><br/>3 points||L’interface applicative ne contient pas de __validations natives__ appropriées aux données représentées dans le schéma<br/><br/>0 point
Validations personnalisées|L’interface applicative contient au minimum 2 __validations personnalisées__ appropriées aux données représentées dans le schéma.<br/><br/>4 points||L’interface applicative contient au moins 1 __validation personnalisée__ appropriée aux données représentées dans le schéma.<br/><br/>3 points||L’interface applicative ne contient pas de __validation personnalisée__ appropriée aux données représentées dans le schéma<br/><br/>0 point
Application sécurisée|L’interface applicative est correctement __sécurisée__.<br/><br/>4 points||L’interface applicative est partiellement __sécurisée__.<br/><br/>3 points||L’interface applicative n’est pas __sécurisée__.<br/><br/>0 point
Messages d'erreur|Les messages d’erreur sont personnalisés en français.<br/><br/>4 points||L’interface applicative contient des messages d’erreurs appropriés.<br/><br/>3 points||L’interface applicative ne contient pas de messages d’erreurs appropriés.<br/><br/>0 point
Publication|L’interface applicative est publiée et fonctionnelle. <br/><br/>2 points||L’interface applicative n’est pas correctement publiée. <br/>Certaines fonctionnalités ne fonctionnement pas. <br/><br/>1 point||L’interface applicative n’est pas publiée<br/><br/>0 point
Documentation|La documentation de l’interface applicative est claire et complète. <br/><br/>4 points||La documentation de l’interface applicative est floue ou incomplète.<br/><br/>2 points||La documentation de l’interface applicative est inexistante.<br/><br/>0 point
La qualité générale de l’interface applicative (API) démontre une rigueur dans l’application des procédures d’assurance qualité.<br/>{==(Correction négative, -1 par bogue identifié)==} {: colspan=5}||&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}
__Application Web (50%)__ {: colspan=5}||&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}
Composants|L’application est optimalement décomposée en composants.<br/><br/>5 points||L’application est correctement décomposée en composants<br/><br/>4 points|L’application est décomposée en composants, mais contient une ou 2 erreurs de structure. <br/><br/>2 points|L’application n’est pas correctement décomposée<br/><br/>0 point
Hooks|Les techniques de programmation utilisées démontrent une excellente maîtrise de l’approche par hooks<br/><br/>5 points|Les techniques de programmation utilisées démontrent une bonne maîtrise de l’approche par hooks <br/><br/>3 points|Les techniques de programmation utilisées démontrent une légère maîtrise de l’approche par hooks<br/><br/>2 points||Les techniques de programmation utilisées ne démontrent pas la maîtrise de l’approchepar hooks<br/><br/>0 point
Méthodes HTTP|L’application implémente correctement l’ensemble des méthodes HTTP fournies par l’interface applicative (API).<br/><br/>12 points|L’application implémente correctement 75% des méthodes HTTP fournies par l’interface applicative (API).<br/><br/>9 points|L’application implémente correctement 50% des méthodes HTTP fournies par l’interface applicative (API).<br/><br/>7 points|L’application implémente correctement 25% des méthodes HTTP fournies par l’interface applicative (API).<br/><br/>3 points|L’application implémente correctement moins de 25% des méthodes HTTP fournies par l’interface applicative (API).<br/><br/>0 point
Validations|L’application contient des validations appropriées.<br/><br/>5 points||L’application contient des validations partiellement appropriées.<br/><br/>3 points||L’application ne contient pas de validations appropriées.<br/><br/>0 point
Visuel|L’application intègre adéquatement des composants visuels répondant aux exigences du projet. <br/><br/>5 points||L’application intègre partiellement des composants visuels répondant aux exigences du projet. <br/><br/>3 points||L’application n’intègre pas des composants visuels répondant aux exigences du projet. <br/><br/>0 point
Application sécurisée|L’application est correctement sécurisée.<br/><br/>4 points||L’application est partiellement sécurisée.<br/><br/>3 points||L’application n’est pas sécurisée.<br/><br/>0 point
Internationalisation|L’application est entièrement internationalisée dans un minimum de 2 langues<br/><br/>5 points||L’application est partiellement internationalisée dans un minimum de 2 langues<br/><br/>3 points||L’application n’est pas internationalisée dans un minimum de 2 langues<br/><br/>0 point
Organisation visuelle|L’organisation visuelle des fonctionnalités est adéquate et cohérente dans un minimum de 3 affichages (mobile, tablette et PC)<br/><br/>3 points||Les fonctionnalités développées contiennent 1 ou 2 incohérences au niveau de l’organisation visuelle.<br/><br/>2 points||L’organisation visuelle des fonctionnalités développées est inadéquate ou incohérente.<br/><br/>0 point
Navigation|La navigation est intuitive.<br/>_(Positionnement des boutons, retour à l’accueil, utilisation d’onglets, etc.)_<br/><br/>2 points||La navigation contient une erreur de parcours.<br/><br/>1 point||La navigation contient plus d’une erreur de parcours.<br/><br/>0 point
PWA|L’application est configurée en tant qu’application progressive (PWA) et répond à plus de 75% des exigences.<br/><br/>2 points||L’application est configurée en tant qu’application progressive (PWA) et répond à plus de 50% des exigences.<br/><br/>1 point||L’application est configurée en tant qu’application progressive (PWA) ou répond à moins de 50% des exigences.<br/><br/>0 point
Publication|L’application est publiée et fonctionnelle.<br/><br/>2 points||L’interface applicative n’est pas correctement publiée.  Certaines fonctionnalités ne fonctionnement pas. <br/><br/>1 point||L’application n’est pas publiée<br/><br/>0 point
La qualité générale de l’application démontre une rigueur dans l’application des procédures d’assurance qualité.<br/>{==(Correction négative, -1 par bogue identifié)==} {: colspan=5}||&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}|&#8288 {: style="padding:0"}
