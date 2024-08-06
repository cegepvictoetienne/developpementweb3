# Simulacre pour Mongoose

## Introduction

Tester unitairement un projet utilisant Mongoose peut être un vrai casse-tête. En effet, Mongoose est un ORM pour MongoDB, et il est difficile de tester du code qui dépend d'une base de données. Cependant, il est possible de simuler Mongoose pour tester son code sans dépendre de MongoDB.

## Simuler Mongoose

Pour simuler Mongoose, il suffit de créer un simulacre de Mongoose. 

Commençons par créer un projet Node.js et installer Mongoose :

```bash
npm init -y
npm install mongoose
npm install --save-dev @jazim/mock-mongoose jasmine @types/jasmine typescript
```
Initialiser TypeScript :

```bash
npx tsc --init
```

Changer la configuration de TypeScript ainsi :

```json
{!simulacre_mongoose/tsconfig.json!}
```

Initialiser Jasmine :

```bash
npx jasmine init
```

Changez la configuration de Jasmine ainsi :
``` json
{!simulacre_mongoose/spec/support/jasmine.json!}
```
Créer le modèle Mongoose (Fiche dans ce cas-ci):

```typescript
{!simulacre_mongoose/src/fiche.ts!}
```

Créez un fichier `spec/test.spec.ts` :

```typescript
{!simulacre_mongoose/spec/test.spec.ts!}
```

Modifier le fichier `package.json` pour ajouter les scripts suivants :

```json
{!simulacre_mongoose/package.json!}
```

La commande `npm run test` exécute les tests Jasmine.






!!! Manuel 
    [Module Mock-Mongoose](https://github.com/jazimabbas/mock-mongoose)
    [Module Jasmine](https://jasmine.github.io/)
