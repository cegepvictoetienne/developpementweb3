# Gérer la soumission de formulaires avec Next.js

1. Créer le formulaire 

Pour créer un formulaire, il suffit de créer un fichier `form.tsx` dans le dossier `app`. 

``` ts title="app/form.tsx"

export default function Form() {
  return (
    <form>
      <label htmlFor="nom">Nom:</label>
      <input type="text" id="nom" name="nom" />
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

2. Gérer la soumission du formulaire

Pour gérer la soumission du formulaire, il suffit d'ajouter une action serveur au formulaire. 

``` ts title="app/form.tsx"
export default function Form() {

  async function SoumettreFormulaire(formData) {
    'use server';

    const reponse = {
        nom: formData.get('nom')
    }
    
    console.log(reponse);
  }

  return (
    <form action={SoumettreFormulaire}>
      <label htmlFor="nom">Nom:</label>
      <input type="text" id="nom" name="nom" />
      <button type="submit">Envoyer</button>
    </form>
  );
}
