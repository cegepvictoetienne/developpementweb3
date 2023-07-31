# TypeScript 2  

## Union de types  

L’union de type permet d’indiquer à TypeScript que nous acceptons deux types de données pour une variable ou un argument de fonction. Par exemple :  

``` ts title="union.ts"
function devineMonAge(age: number | string) {
    console.log(`Ton age est ${age}`);
}

devineMonAge(40);
devineMonAge('Trente huit');

```

## Rétrécir le type  

Quand nous acceptons plus d’un type pour un argument, il est parfois nécessaire de bien déterminer le type dans le corps de la fonction :  

Par exemple :  

``` ts title="retrecir.ts"
function doubler(item: number | string) {
    if (typeof item === 'string') {
        return `${item} - ${item}`;
    }   
    return item * 2;
}

console.log(doubler('Allo'));
console.log(doubler(12));

```

## Union de type pour créer un alias  

``` ts title="alias.ts"
type Utilisateur = {
    nom: string;
    age: number;
    actif: boolean;
};

type Administrateur = {
    nom: string;
    niveau: number;
};

type Employe = Utilisateur | Administrateur;

```

## Rétrécir le type – autre exemple  

``` ts title="retrecir2.ts"
const roy: Administrateur = {
    nom: 'Roy',
    niveau: 99,
};

const richmond: Utilisateur = {
    nom: 'Richmond',
    age: 40,
    actif: true,
};

function direBonjour(employe: Employe) {
    if ('niveau' in employe) {
        console.log(
        `Bonjour Adminisatrateur ${employe.nom} de niveau ${employe.niveau}`
        );
        return;
    }
    console.log(`Bonjour Utilisateur ${employe.nom} agé de ${employe.age} ans`);
}

direBonjour(roy);
direBonjour(richmond);

```

## Union de type – pour restreindre les valeurs  

``` ts title="tableau_de_fruits.ts"
type Chat {
    nom: string,
    age: number,
    race: 'Ragdoll' | 'Siamois' | 'Sphynx',
};

const fanta : Chat = {
    nom: 'Fanta',
    age: 8,
    race: 'Ragdoll',
};

const furguie : Chat = {
    nom: 'Furguie',
    age: 3,
    race: 'colorpoint',
};

```

<figure markdown>
  ![ts-union](images/ts-union.png){ width="600" }
  <figcaption>Erreur lorsque la mauvaise valeur est assignée.</figcaption>
</figure>

## Enum  

Un enum nous permet de définir un ensemble de constantes nommées.  

``` ts title="race.ts"
enum Race {
    Ragdoll,
    Siamois,
    Sphynx,
}

type Chat = {
    nom: string;
    age: number;
    race: Race;
};

const fanta: Chat = {
    nom: 'Fanta',
    age: 8,
    race: Race.Ragdoll,
};

```

## Interface  

Une interface est une façon différente en TypeScript pour décrire la forme d’un objet :  

``` ts title="race.ts"
enum Race {
    Ragdoll,
    Siamois,
    Sphynx,
}

interface Chat {
    nom: string;
    age: number;
    race: Race;
};

const fanta: Chat = {
    nom: 'Fanta',
    age: 8,
    race: Race.Ragdoll,
};

```

## Generics  

Comme dans C#, TypeScript support les generics :  

``` ts title="generics.ts"
const listeDeChats : Array<Chat> = [];
```

