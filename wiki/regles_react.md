# Règles de React

## Introduction

Les règles de React sont des principes essentiels pour écrire du code idiomatique en React. Suivre ces règles aide à créer des applications bien organisées, sûres et composables.

## Composants et Hooks doivent être purs

### 1. Les composants doivent être idempotents
Les composants React doivent toujours renvoyer la même sortie pour les mêmes entrées (props, state, context).

### 2. Les effets secondaires en dehors du rendu
Les effets secondaires ne doivent pas être exécutés dans la fonction de rendu car React peut rendre les composants plusieurs fois.

### 3. Props et state immuables
Les props et le state d'un composant sont des instantanés immuables. Ne les modifiez jamais directement.

### 4. Valeurs et arguments des hooks immuables
Une fois les valeurs passées à un hook, elles ne doivent pas être modifiées. Comme les props, elles deviennent immuables.

### 5. Valeurs immuables après le passage au JSX
Ne modifiez pas les valeurs après leur utilisation dans le JSX. Effectuez les mutations avant de créer le JSX.

## Appels des composants et hooks par React

### 1. Ne jamais appeler directement les fonctions de composants
Les composants doivent être utilisés uniquement dans le JSX, pas appelés comme des fonctions régulières.

### 2. Ne jamais passer des hooks comme des valeurs régulières
Les hooks doivent être appelés uniquement à l'intérieur des composants, et non passés comme des valeurs normales.

## Règles des hooks

### 1. Appeler les hooks au niveau supérieur uniquement
Ne pas appeler les Hooks à l'intérieur de boucles, de conditions ou de fonctions imbriquées. Utilisez-les toujours au niveau supérieur de votre fonction React.

### 2. Appeler les hooks uniquement à partir des fonctions React
Ne pas appeler les hooks à partir de fonctions JavaScript régulières.

## Conclusion

Suivre les règles de React aide à maintenir des applications prévisibles, déboguables et optimisées. Utilisez le mode strict de React et le plugin ESLint pour vérifier automatiquement le respect de ces règles.

!!! manuel  
    [Rules of React](https://react.dev/reference/rules)

