# Projet API complet

## Objectif

Créer une API complète avec une base de données MongoDB, un serveur Express et Mongoose.

!!! warning "Attention"
    Le projet suivant a été généré avec la version du 12 septembre 2025 du générateur express typescript. Il se peut que certaines parties du code ne fonctionnent pas avec les versions plus récentes du générateur.

## Simulacre  

Pour tester un projet complet en mongoose, il faut utiliser un simulacre.  

Voici la séquence d'appel normal :  

![type:video](./videos/GET-normal.mp4)  

Voici la séquence d'appel avec le simulacre (notez que le simulacre intercepte les appels à mongoose pour éviter de toucher à la BD :   

![type:video](./videos/GET-simulacre.mp4)  

## Étape 1 - Initialisation du projet

Générer le projet avec le générateur express-typescript :  

``` nodejsrepl title="console"
npx express-generator-typescript auteur_mongoose_simulacre
```

Ajouter le module Mongoose à votre application :  

``` nodejsrepl title="console"
npm install mongoose
```

Ajouter les tests de mongoose :  

``` nodejsrepl title="console"
npm i @jazim/mock-mongoose -D
```


## Étape 2 - Préparer la connexion à la base de données

Créer la variable d'environnement pour l'URI de MongoDB :  

``` ts title="config/.env.development"
{!auteur_mongoose_simulacre/config/.env.development!}
```

Configurer EnvVars pour exposer la variable d'environnement :  

``` ts title="src/common/EnvVars.ts"
{!auteur_mongoose_simulacre/src/common/constants/ENV.ts!}
```

Démarer la connexion à MongoDB :  

``` ts title="src/index.ts"
{!auteur_mongoose_simulacre/src/index.ts!}
```

## Étape 3 - Créer le schéma Mongoose

``` ts title="src/models/Auteur.ts"
{!auteur_mongoose_simulacre/src/models/Auteur.ts!}
```

## Étape 4 - Créer le repo

``` ts title="src/repos/AuteurRepo.ts"
{!auteur_mongoose_simulacre/src/repos/AuteurRepo.ts!}
```

## Étape 5 - Créer le service

``` ts title="src/services/AuteurService.ts"
{!auteur_mongoose_simulacre/src/services/AuteurService.ts!}
``` 

## Étape 6 - Créer la route

``` ts title="src/routes/AuteurRoutes.ts"
{!auteur_mongoose_simulacre/src/routes/AuteurRoutes.ts!}
```

## Étape 7 - Créer le chemin de l'API

``` ts title="src/common/constants/Paths.ts"
{!auteur_mongoose_simulacre/src/common/constants/Paths.ts!}
```

## Étape 8 - Consolider les routes dans l'API

``` ts title="src/routes/index.ts"
{!auteur_mongoose_simulacre/src/routes/index.ts!}
```

# Tests unitaires automatiques

## Étape 1 - Créer le test de l'API

``` ts title="tests/auteur.test.ts"
{!auteur_mongoose_simulacre/tests/auteur.test.ts!}
```

## Étape 2 - Exécuter les tests de l'API

``` nodejsrepl title="console"
npm test
```

