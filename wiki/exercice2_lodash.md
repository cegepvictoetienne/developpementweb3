# Exercice avec Lodash  

- Créer un dossier exercice_lodash  
- Initialiser TypeScript  
- Initialiser Node  
- Installer nodemon, concurrently et lodash  
- Créer un script dans package.json pour compiler le TypeScript et exécuter le code avec nodemon en paralèle  
- Prendre le code suivant et résoudre les items avec lodash  


``` ts title="exercice_lodash.ts"
import _ from 'lodash';

type Utilisateur = {
  nom: string;
  age: number;
  actif: boolean;
};

let utilisateurs: Utilisateur[] = [
  { nom: 'Roy', age: 30, actif: true },
  { nom: 'Moses', age: 31, actif: true },
  { nom: 'Jen', age: 31, actif: false },
  { nom: 'Douglas', age: 45, actif: true },
  { nom: 'Denholm', age: 40, actif: false },
  { nom: 'Richmond', age: 40, actif: true },
];

// Avec Lodash, créer un tableau qui ne prend qu'une tranche des utilisateurs à partir du début jusqu'au premier utilisateur inactif
const premiersActifs = 'À faire';
console.log('Liste des premiers utilisateurs actifs :');
console.log(premiersActifs);

// Avec Lodash, créer un tableau qui contient seulement les utilisateurs de 40 ans et plus
const utilisateurs40plus = 'À faire';
console.log('Liste des utilisateurs de 40 ans et plus :');
console.log(utilisateurs40plus);

// Avec Lodash, regrouper les utilisateurs par leur age
const utilisateursParAge = 'À faire';
console.log('Regrouper les utilisateurs par leur âge :');
console.log(utilisateursParAge);

// Avec Lodash, extrait l'utilisateur le plus vieux
const utilisateursPlusVieux = 'À faire';
console.log('Le plus vieux :');
console.log(utilisateursPlusVieux);

// Avec Lodash, déterminer l'age moyen
const ageMoyen = 'À faire';
console.log('Age moyen :');
console.log(ageMoyen);

// Avec Lodash, remplacer les caractères avec accents et cédilles par leur équivalent sans accent. Ex : é -> e, ç => c
const phraseAvecAccents = "Ça été un mois d'août très tempéré";
const phraseSansAccents = 'À faire';
console.log(phraseSansAccents);

```