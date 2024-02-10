# Gestion d'erreurs avec Next.js  


## Fichier `error.tsx`  

Pour créer une page d'erreur personnalisée, il suffit de créer un fichier `error.tsx` dans le dossier `app`.  

``` ts title="app/error.tsx"

export default function Erreur() {
  return (
    <div>
      <h1>Erreur!</h1>
      <p>Une erreur s''est produite...</p>
    </div>
  );
}
```

## Fichier `loading.tsx`

Pour créer une page de chargement personnalisée, il suffit de créer un fichier `loading.tsx` dans le dossier `app`.  

``` ts title="app/loading.tsx"
export default function Chargement() {
  return (
      <p>Chargement en cours...</p>
  );
}
```

## Fichier `not-found.tsx`  

Pour créer une page 404, il suffit de créer un fichier `not-found.tsx` dans le dossier `app`.  

``` ts title="app/not-found.tsx"
export default function NotFound() {
  return (
    <div>
      <h1>Page non trouvée</h1>
      <p>La page que vous cherchez n''existe pas...</p>
    </div>
  );
}
```


