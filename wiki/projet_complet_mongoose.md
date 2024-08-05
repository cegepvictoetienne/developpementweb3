# Projet API complet

## Objectif

Créer une API complète avec une base de données MongoDB et un serveur Express.

!!! warning "Attention"
    Le projet suivant a été généré avec la version du 5 août 2024 du générateur express typescript. Il se peut que certaines parties du code ne fonctionnent pas avec les versions plus récentes du générateur.



## Étape 1 - Initialisation du projet

Générer le projet avec le générateur express-typescript :  

``` nodejsrepl title="console"
npx express-generator-typescript chenil24
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

``` ts title="env/development.env"
{!chenil24/env/development.env!}
```

Configurer EnvVars pour exposer la variable d'environnement :  

``` ts title="src/common/EnvVars.ts"
{!chenil24/src/common/EnvVars.ts!}
```

Démarer la connexion à MongoDB :  

``` ts title="src/index.ts"
{!chenil24/src/index.ts!}
```

## Étape 3 - Créer le schéma Mongoose

``` ts title="src/models/Animal.ts"
{!chenil24/src/models/Animal.ts!}
```

## Étape 4 - Créer le repo

``` ts title="src/repos/AnimalRepo.ts"
{!chenil24/src/repos/AnimalRepo.ts!}
```

## Étape 5 - Créer le service

``` ts title="src/services/AnimalService.ts"
{!chenil24/src/services/AnimalService.ts!}
``` 

## Étape 6 - Créer la route

``` ts title="src/routes/AnimalRoutes.ts"
{!chenil24/src/routes/AnimalRoutes.ts!}
```

## Étape 7 - Créer le chemin de l'API

``` ts title="src/common/Paths.ts"
{!chenil24/src/common/Paths.ts!}
```

## Étape 8 - Consolider les routes dans l'API

``` ts title="src/routes/index.ts"
{!chenil24/src/routes/index.ts!}
```

# Tests unitaires automatiques

## Étape 1 - Ajuster le type de retour de l'API

``` ts title="spec/types/supertest/index.d.ts"
{!chenil24/spec/types/supertest/index.d.ts!}
```

## Étape 2 - Créer le test de l'API

``` ts title="spec/tests/animaux.spec.ts"
{!chenil24/spec/tests/animaux.spec.ts!}
```

## Étape 3 - Exécuter les tests de l'API

``` nodejsrepl title="console"
npm tests
```

