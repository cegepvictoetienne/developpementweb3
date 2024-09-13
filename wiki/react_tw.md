# React et Tailwind CSS


# Introduction à TailwindCSS

TailwindCSS est un framework CSS utilitaire qui permet de concevoir des interfaces utilisateur directement dans vos composants avec des classes pré-définies. Contrairement au CSS traditionnel où vous devez définir manuellement vos styles dans des fichiers séparés, TailwindCSS vous permet d'appliquer des styles en utilisant des classes utilitaires dans votre HTML ou JSX.

# Comparaison entre TailwindCSS et le CSS traditionnel

1. **Déclaration des styles :**

   - **CSS traditionnel :**
     - Vous définissez les styles dans un fichier CSS externe puis vous les appliquez aux éléments HTML via des classes.
     ```css
     /* styles.css */
     .button {
       background-color: #3490dc;
       color: white;
       padding: 10px 20px;
       border-radius: 5px;
     }
     ```

     ```jsx
     // React Component
     <button className="button">Click me</button>
     ```

   - **Avec TailwindCSS :**
     - Les styles sont appliqués directement dans le JSX avec des classes utilitaires.
     ```jsx
     <button className="bg-blue-500 text-white py-2 px-4 rounded">Click me</button>
     ```

   Ici, au lieu d'utiliser une classe CSS définie ailleurs, Tailwind fournit des classes comme `bg-blue-500` pour la couleur de fond, `text-white` pour le texte blanc, `py-2` pour le padding vertical, etc.

2. **Gestion des Responsives :**

   - **CSS traditionnel :**
     - Les media queries sont utilisées pour rendre le design responsive.
     ```css
     .button {
       padding: 10px 20px;
     }
     @media (min-width: 768px) {
       .button {
         padding: 15px 30px;
       }
     }
     ```

   - **Avec TailwindCSS :**
     - Les classes Tailwind sont modulaires et gèrent le responsive via des préfixes comme `md:`, `lg:`.
     ```jsx
     <button className="py-2 px-4 md:py-4 md:px-8">Click me</button>
     ```

3. **Personnalisation des styles :**

   - **CSS traditionnel :**
     - Vous avez la flexibilité complète de créer n'importe quel style que vous souhaitez dans un fichier CSS.
     - Si vous avez un style spécifique non disponible dans Tailwind, vous pouvez personnaliser la configuration ou utiliser la directive `@apply` pour combiner des utilitaires.

   - **Avec TailwindCSS :**
     - Tailwind peut être étendu via le fichier de configuration `tailwind.config.js` pour personnaliser les couleurs, espacements, typographies, etc.
     ```js
     module.exports = {
       theme: {
         extend: {
           colors: {
             primary: '#ff6363',
           },
         },
       },
     }
     ```

4. **Avantages et Inconvénients :**

   - **CSS traditionnel :**
     - Avantages : Flexible, déjà bien établi.
     - Inconvénients : Peut devenir difficile à maintenir avec de grands projets, duplication de code, comment nommer les classes, etc.
   
   - **TailwindCSS :**
     - Avantages : Rapide, utilisation directe dans le JSX, élimination des styles inutilisés lors du build, facile à personnaliser.
     - Inconvénients : Peut sembler verbeux au début, nécessite d'apprendre les classes utilitaires.

# Installation de TailwindCSS

## Installation de Vite
1. Situez vous dans le dossier où vous désirez créer l’application (le dossier de l’application sera automatiquement créé à la prochaine étape)  
1. Exécutez la commande de création d’application :  
    ``` nodejsrepl title="console"
    npm create vite@latest my_app
    ```
1. Suivez les instructions et choisir __React__ et __TypeScript__  
1. Une fois l’application générée, déplacez-vous dans le dossier créé :  
    ``` nodejsrepl title="console"
    cd my_app
    ```
1. Exécutez l’application en utilisant les commandes suivantes :  
    ``` nodejsrepl title="console"
    npm install
    npm run dev
    ```

## Installation de Tailwind CSS

1. Installez Tailwind CSS en utilisant la commande suivante :  
    ``` nodejsrepl title="console"
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    ```
1. Créez un fichier de configuration Tailwind CSS en utilisant la commande suivante :  
    ``` nodejsrepl title="console"
    npx tailwindcss init -p
    ```
1. Configurer les chemins des fichiers CSS dans le fichier `tailwind.config.js` :  
    ``` js title="tailwind.config.js"
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```
1. Ajouter les imports de Tailwind CSS dans le fichier `index.css` :  
    ``` css title="index.css"
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
    ```
1. Démarrez l'application en utilisant la commande suivante :  
    ``` nodejsrepl title="console"
    npm run dev
    ```
1. Tailwind CSS est maintenant installé et prêt à être utilisé dans votre application React.

!!! manuel 
    [Documentation officielle Tailwind CSS](https://tailwindcss.com/docs/guides/vite)

!!! manuel 
    [Feuille de triche TailwindCSS](https://nerdcave.com/tailwind-cheat-sheet)

# Extensions VSCode recommandées pour TailwindCSS

1. **Tailwind CSS IntelliSense** :
   Cette extension offre de l'auto-complétion pour les classes Tailwind, ainsi que la documentation en survolant les classes dans votre code.

   - [Lien vers l'extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. **PostCSS Language Support** :
   Nécessaire si vous utilisez Tailwind avec PostCSS, cette extension vous aidera à gérer vos fichiers CSS de manière efficace.

   - [Lien vers l'extension](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

3. **Headwind** :
   Cet outil trie automatiquement vos classes Tailwind dans un ordre logique. Cela rend votre code plus lisible.

   - [Lien vers l'extension](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)

4. **Prettier - Code formatter** :
   Utilisez cette extension pour vous assurer que votre code React, y compris les classes Tailwind, est bien formaté.

   - [Lien vers l'extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


# Personnages avec TailwindCSS


``` ts title="personnage.component.tsx"
{!personnage_tw/src/components/personnage.component.tsx!}
```

!!! codesandbox "CodeSandbox"  
    [Démo - TailwindCSS](https://codesandbox.io/p/sandbox/github/jaixan/developpementweb3/tree/main/code/personnage_tw) 