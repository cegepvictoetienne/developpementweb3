# Structure typique d'un projet React  

## Structure   

``` 
{!personnage_base/folder_structure.txt!}
``` 

## Les dossiers  

| Dossier | Utilisation  
| -- | --  
| src | Tout le code de l'application React  
| src/assets | Les images, vidéos et autres média utilisés dans l'application  
| src/components | Les composantes de React  


## La racine - Index.html  


Index.html est le point d'entrée du site Web.  

``` html title="index.html"
{!personnage_base/index.html!}
``` 

## Le contenant principal  - main.tsx  


main.tsx contient l'application React.  

``` ts title="/src/main.tsx"
{!personnage_base/src/main.tsx!}
``` 

## La composante principale - App.tsx  


App.tsx est l'application React.  C'est ici que l'on modifie le code pour faire notre application.  

``` ts title="/src/components/App/App.tsx"
{!personnage_base/src/components/App/App.tsx!}
``` 

Dans la structure utilisée pour le cours, chaque composante est dans son propre dossier.  Pour faciliter l'importation des composantes, un fichier `index.ts` est créé, pour exporter la composante.  

``` ts title="/src/components/App/index.ts"
{!personnage_base/src/components/App/index.ts!}
``` 

Le CSS spécifique à une composante peut résider dans le dossier de la composante :  

``` css title="/src/components/App/App.css"
{!personnage_base/src/components/App/App.css!}
``` 

## Une composante spécifique à votre projet   


Personnage.tsx est une composante spécifique à votre application React. 

``` ts title="/src/components/Personnage/Personnage.tsx"
{!personnage_base/src/components/Personnage/Personnage.tsx!}
```

``` ts title="/src/components/Personnage/index.ts"
{!personnage_base/src/components/Personnage/index.ts!}
``` 

Le CSS spécifique à une composante peut résider dans le dossier de la composante :  

``` css title="/src/components/Personnage/Personnage.css"
{!personnage_base/src/components/Personnage/Personnage.css!}
``` 
