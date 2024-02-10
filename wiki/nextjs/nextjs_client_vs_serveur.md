# Next.js - Composants clients et composants serveurs  

# **TODO** Expliquer la différence entre les composants clients et les composants serveurs.

Par défaut, tous les composants React dans Next.js sont des composants serveurs, car ils sont rendus côté serveur. Cela signifie que vous pouvez écrire des composants React et les rendre côté serveur sans avoir à penser à la logique du cycle de vie du composant.

## Quand utiliser les composants clients

- Lorsque vous avez besoin d'interactivité: événements, effets secondaires, etc. (onClick, onChange, onMouseEnter, etc.).
- Lorsque vous avez besoin d'accéder à l'API du navigateur (témoins, stockage local, etc.).
- Utilisation de useEffect, useState, usePathname, etc.

## Comment utiliser les composants clients

Dans le fichier du composant client, indiquer la mention `'use client';` au début du fichier.

``` ts title="app/components/main-header.tsx"
'use client';
```

# Utiliser le chemin en cours de la page web 

Pour utiliser le chemin en cours de la page web, il faut utiliser le hook `usePathname` de next.js.

``` ts 
import { usePathname } from 'next/navigation';

const path = usePathname();
```

# Comment bien utiliser les composants clients

Il est important d'isoler le plus possible les composants clients. Ça implique de faire des sous-composants simples qui utilisent les fonctionnalités nécessitant une exécution du côté client.

Par exemple, au lieu d'avoir l'entête du site identifié client car on veut des liens qui changent de couleur lorsque c'est la page active, on peut faire un sous-composant qui s'occupe de ça.

``` ts title="app/components/nav-link.tsx"
