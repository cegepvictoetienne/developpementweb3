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

# Coder un API Express  

L'exemple suivant code une mini API qui gère des réservations dans un hotel.  

!!! codesandbox "CodeSandbox"  
    [Démo - API Express](https://codesandbox.io/p/sandbox/cegepvicto-devweb3-hotel-5lkjd4)  

## Étape 1 - Créer l’interface model/Reservation.ts  


``` ts title="model/Reservation.ts"
{!hotel/src/models/Reservation.ts!}

```

## Étape 2 - Ajouter le modèle à la base de données bidon 

``` ts title="repos/MockOrm.ts"
{!hotel/src/repos/MockOrm.ts!}

```

## Étape 3 - Mettre à jour la base de données  

``` json title="repos/database.json"  
{!hotel/src/repos/database.json!}
```  

## Étape 4 - Créer le repo  

``` ts title="repos/ReservationRepo.ts"  
{!hotel/src/repos/ReservationRepo.ts!}

```

## Étape 5 - Créer le service  

``` ts title="services/ReservationService.ts"
{!hotel/src/services/ReservationService.ts!}

```

## Étape 6 - Créer les routes  

``` ts title="routes/ReservationRoute.ts"
{!hotel/src/routes/ReservationRoute.ts!}

```

## Étape 7 - Ajouter les chemins de l’API dans les constantes  

``` ts title="routes/constants/Paths.ts"
{!hotel/src/routes/constants/Paths.ts!}

```

## Étape 8 - Ajouter les chemins de l’API dans api.ts  

``` ts title="routes/api.ts"
{!hotel/src/routes/api.ts!}

```