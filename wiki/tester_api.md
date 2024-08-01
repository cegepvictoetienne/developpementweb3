# Tester automatiquement un API

## Introduction

Dans ce tutoriel, nous allons voir comment tester automatiquement un API. Pour cela, nous allons utiliser les modules `jasmine` et `supertest`. Ce sont les deux technologies utilisées dans le modèle utilisé dans le cours.

## Modules 

### Jasmine

Jasmine est un cadriciel de test pour JavaScript. Il est utilisé pour tester le code JavaScript. Il est facile à mettre en place et à utiliser. Il est également très flexible. Il est utilisé pour tester le code JavaScript dans les applications Node.js.

### Supertest

Supertest est un module Node.js qui permet de tester les API REST. Il est utilisé pour tester les API REST en Node.js. Il est facile à mettre en place et à utiliser. Il est également très flexible. 

## Concepts de base

### Les assertions

Les assertions sont des instructions qui vérifient si une condition est vraie ou fausse. Si la condition est vraie, le test passe. Si la condition est fausse, le test échoue. Les assertions sont utilisées pour vérifier si le code fonctionne correctement.

Exemple d'assertion : 

```typescript
expect(1 + 1).toBe(2);
```

### Les espions

Les espions sont des fonctions qui enregistrent des informations sur les appels à d'autres fonctions. Ils sont utilisés pour vérifier si une fonction a été appelée, combien de fois elle a été appelée, avec quels arguments, etc.

```typescript
spyOn(console, 'log');
console.log('Hello, world!');
expect(console.log).toHaveBeenCalled();
```

Les espions peuvent aussi être utilisés comme simulacre de fonction.

```typescript
const data = genererReservationsBidon();
spyOn(ReservationRepo, 'getAll').and.resolveTo(data);
```

Dans cet exemple, `ReservationRepo.getAll` est remplacé par une fonction qui retourne une promesse résolue avec `data`.

## Anatomie d'un test

Un test est une fonction qui vérifie si une partie du code fonctionne correctement. Un test est composé de trois parties :

1. La mise en place : c'est la partie du test où vous configurez l'environnement de test. Vous créez les objets nécessaires pour exécuter le test.

2. L'exécution : c'est la partie du test où vous exécutez le code que vous voulez tester.

3. L'assertion : c'est la partie du test où vous vérifiez si le code a fonctionné correctement. Vous vérifiez si le résultat est celui attendu.

Exemple de test :

```typescript
it('doit retourner 200 OK', async () => {
  const response = await request(app).get('/api/reservations');
  expect(response.status).toBe(200);
});
```

Dans cet exemple, le test vérifie si l'API `/api/reservations` retourne un code 200 OK.

## Exemple complet de test

Voici un exemple complet de test d'une API REST en utilisant Jasmine et Supertest :


``` ts title="spec/tests/reservations.spec.ts"  
{!hotel24/spec/tests/reservations.spec.ts!}

```

