# Générateur de modèle pour Express  

Il y a un Générateur d’applications Express qui permet de générer la structure de base recommandée en Typescript. 

Voici comment générer l’application  
Situez vous dans le dossier où vous désirez créer l’application (le dossier de l’application sera automatiquement créé à la prochaine étape)  

Exécutez la commande de création d’application :  

``` nodejsrepl title="console"
npx express-generator-typescript mapremierappexpress
```

Une fois l’application générée, déplacez-vous dans le dossier créé et installez les modules  

``` nodejsrepl title="console"
cd mapremierappexpress
npm install 
```

Si vous avez des erreurs de modules dépréciés, vous pouvez les corriger en suivant les instructions de la section [Module déprécié](module_deprecie.md).

Exécutez l’application en utilisant la commande suivante :  

``` nodejsrepl title="console"
npm run dev 
```

<figure markdown>
  ![express-generator](images/express-generator.png){ width="600" }
  <figcaption>Exécution du modèle Express</figcaption>
</figure>

!!! manuel 
    [Installation d'express](https://expressjs.com/fr/starter/installing.html)  
    [Express Generator avec TypeScript](https://github.com/seanpmaxwell/express-generator-typescript)  


# Configurer l'analysateur de code __ESLint__ dans le projet Express  

## Étape 1 - Installer le bon module ESLint 

```
npm install @stylistic/eslint-plugin
```

## Étape 2 - Désinstaller les modules ESLint TS et JS  

```
npm remove @stylistic/eslint-plugin-ts
npm remove @stylistic/eslint-plugin-js
```

## Étape 3 - Corriger configuration ESLint  

Il faut retirer les références aux vieux modules ESLint TS et JS en faveur au module unifié.  

``` ts title="eslint.config.ts"
{!hotel25/eslint.config.ts!}  
```

# Pour Windows :  

## Étape 1 - installer cross-env :  

```
npm install cross-env
```   

## Étape 2 - modifier package.json comme suit :  

```
  "dev": "cross-env NODE_ENV=development ts-node ./src",
  "dev:hot": "cross-env nodemon --exec \"npm run dev\" --watch ./src --ext .ts",
```  

## Étape 3 - modifier eslint.config.ts :  

```
{
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(), // AJOUTER CETTE LIGNE EN WINDOWS
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
```   

# Coder un API Express  

L'exemple suivant code une mini API qui gère des réservations dans un hotel.  

!!! codesandbox "CodeSandbox"  
    [Démo - API Express](https://codesandbox.io/p/sandbox/github/jaixan/developpementweb3/tree/main/code/hotel25)  

## Étape 1 - Créer l’interface model/Reservation.ts  


``` ts title="models/Reservation.ts"
{!hotel25/src/models/Reservation.ts!}

```

## Étape 2 - Ajouter le modèle à la base de données bidon 

``` ts title="repos/MockOrm.ts"
{!hotel25/src/repos/MockOrm.ts!}

```

## Étape 3 - Mettre à jour la base de données  

``` json title="repos/database.json"  
{!hotel25/src/repos/database.json!}
```  

## Étape 4 - Créer le repo  

``` ts title="repos/ReservationRepo.ts"  
{!hotel25/src/repos/ReservationRepo.ts!}

```

## Étape 5 - Créer le service  

``` ts title="services/ReservationService.ts"
{!hotel25/src/services/ReservationService.ts!}

```

## Étape 6 - Créer les routes  

``` ts title="routes/ReservationRoutes.ts"
{!hotel25/src/routes/ReservationRoutes.ts!}

```

## Étape 7 - Ajouter les chemins de l’API dans les commons  

``` ts title="/common/constants/Paths.ts"
{!hotel25/src/common/constants/Paths.ts!}

```

## Étape 8 - Ajouter les chemins de l’API dans index.ts  

``` ts title="routes/index.ts"
{!hotel25/src/routes/index.ts!}

```