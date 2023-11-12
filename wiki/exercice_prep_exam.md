# Jeu de Pendu avec React et TypeScript  

Objectif : Créer une version simplifiée du jeu de pendu où les joueurs doivent deviner un mot en proposant des lettres.

## Fonctionnalités suggérées :

- Sélectionnez un mot aléatoire à deviner au début du jeu. (utiliser https://trouve-mot.fr/api/random)  
- Affichez des tirets bas pour chaque lettre du mot à deviner.
- Permettez aux joueurs de proposer des lettres.
- Affichez les lettres correctes dans le mot à mesure qu'elles sont devinées.
- Limitez le nombre d'erreurs autorisées (par exemple, 6 erreurs pour un dessin de pendu complet).
- Affichez le dessin du pendu en fonction du nombre d'erreurs.
- Affichez un message de victoire si le joueur devine le mot, et un message de défaite s'il atteint le nombre maximum d'erreurs.

## Étapes suggérées :

1. Créez un composant WordToGuess pour afficher le mot à deviner.
2. Créez un composant LetterInput pour permettre aux joueurs de proposer des lettres.
3. Gérez l'état du jeu à l'aide de React Hooks (useState, useEffect).
4. Utiliser une API pour sélectionner un mot aléatoire.
5. Afficher les lettres correctes devinées.
6. Gérez les erreurs et le dessin du pendu en fonction du nombre d'erreurs.
7. Ajoutez des messages de victoire et de défaite.

## Exigences techniques :

- Utilisez TypeScript pour définir les types des données.
- Utilisez des composants fonctionnels et des hooks pour gérer l'état.
- Utilisez des styles CSS pour rendre le jeu plus attrayant.

## CSS et HTML de départ :

```css 
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

.hangman {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallows {
  width: 200px;
  height: 300px;
  background-color: #931f1d;
  margin-bottom: 20px;
}

.head {
  width: 60px;
  height: 60px;
  background-color: #8a9b68; /* Gold */
  border-radius: 50%;
  position: relative;
  top: 20px;
  left: 70px;
}

.body {
  width: 10px;
  height: 100px;
  background-color: #8a9b68;
  position: relative;
  top: 20px;
  left: 95px;
}

.left-arm {
  width: 80px;
  height: 10px;
  background-color: #8a9b68;
  position: relative;
  top: -50px;
  left: 34px;
  transform: rotate(-45deg);
}

.right-arm {
  width: 80px;
  height: 10px;
  background-color: #8a9b68;
  position: relative;
  top: -58px;
  left: 88px;
  transform: rotate(45deg);
}

.left-leg {
  width: 80px;
  height: 10px;
  background-color: #8a9b68;
  position: relative;
  top: 18px;
  left: 34px;
}

.right-leg {
  width: 80px;
  height: 10px;
  background-color: #8a9b68;
  position: relative;
  top: 10px;
  left: 88px;
}

.left-leg {
  transform: rotate(-45deg);
}

.right-leg {
  transform: rotate(45deg);
}
```

``` html
<div class="hangman">
      <div class="gallows">
        <div class="head"></div>
        <div class="body"></div>
        <div class="left-arm"></div>
        <div class="right-arm"></div>
        <div class="left-leg"></div>
        <div class="right-leg"></div>
      </div>
    </div>
```  

Bonne création de jeu!