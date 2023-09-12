# Projet API complet

## Objectif

Créer une API complète avec une base de données MongoDB et un serveur Express.

!!! warning "Attention"
    Le projet suivant a été généré avec la version du 12 septembre 2023 du générateur express-typescript. Il se peut que certaines parties du code ne fonctionnent pas avec les versions plus récentes du générateur.



## Étape 1 - Initialisation du projet

Générer le projet avec le générateur express-typescript :  

``` nodejsrepl title="console"
npx express-generator-typescript chenil
```

Ajouter le module Mongoose à votre application :  

``` nodejsrepl title="console"
npm install mongoose
```

## Étape 2 - Préparer la connexion à la base de données

Créer la variable d'environnement pour l'URI de MongoDB :  

``` ts title="env/development.env"
{!chenil/env/development.env!}
```

Configurer EnvVars pour exposer la variable d'environnement :  

``` ts title="src/constants/EnvVars.ts"
{!chenil/src/constants/EnvVars.ts!}
```

Démarer la connexion à MongoDB :  

``` ts title="src/index.ts"
{!chenil/src/index.ts!}
```

## Étape 3 - Créer le schéma Mongoose

``` ts title="src/models/Animal.ts"
{!chenil/src/models/Animal.ts!}
```

## Étape 4 - Créer le repo

``` ts title="src/repos/AnimalRepo.ts"
{!chenil/src/repos/AnimalRepo.ts!}
```

## Étape 5 - Créer le service

``` ts title="src/services/AnimalService.ts"
{!chenil/src/services/AnimalService.ts!}
``` 

## Étape 6 - Créer la route

``` ts title="src/routes/AnimalRoutes.ts"
{!chenil/src/routes/AnimalRoutes.ts!}
```

## Étape 7 - Créer le chemin de l'API

``` ts title="src/constants/Paths.ts"
{!chenil/src/constants/Paths.ts!}
```

## Étape 8 - Consolider les routes dans l'API

``` ts title="src/routes/api.ts"
{!chenil/src/routes/api.ts!}
```