# Accessibilité et le Web  

Parmis les utilisateurs de votre site Web, il y en aura qui auront des difficultés à utiliser votre site Web. Il est important de prendre en compte ces utilisateurs et de leur permettre d'utiliser votre site Web.

## Rendre accessible les images  

Les images sont un élément important d'un site Web. Elles permettent d'illustrer le contenu et de le rendre plus agréable à lire. Cependant, les images ne sont pas accessibles aux personnes malvoyantes. Il est donc important de rendre les images accessibles.

### Ajouter un attribut alt

L'attribut alt permet de décrire l'image. Cet attribut est lu par les lecteurs d'écran. Il est donc important de décrire l'image de manière précise.  

```html
<img src="image.jpg" alt="Description de l'image">
```

### Ajouter un attribut title

L'attribut title permet d'ajouter un titre à l'image. Ce titre est affiché lorsque l'utilisateur passe la souris sur l'image. Il est donc important de décrire l'image de manière précise.  

```html
<img src="image.jpg" alt="Description de l'image" title="Titre de l'image">
```

## Bien structurer le contenu

Il est important de bien structurer le contenu de votre site Web. Cela permet aux utilisateurs de mieux comprendre le contenu et de mieux naviguer sur votre site Web.

### Utiliser les balises de titres

Les balises de titres permettent de structurer le contenu de votre site Web. Il est important de bien utiliser les balises de titres.  

```html
<h1>Titre de niveau 1</h1>
<h2>Titre de niveau 2</h2>
<h3>Titre de niveau 3</h3>
<h4>Titre de niveau 4</h4>
<h5>Titre de niveau 5</h5>
<h6>Titre de niveau 6</h6>
```

## Utiliser les propriétés ARIA  

Les propriétés ARIA permettent d'ajouter des informations supplémentaires sur les éléments de votre site Web. Ces informations sont lues par les lecteurs d'écran. Il est donc important de bien utiliser les propriétés ARIA.

### Ajouter l'attribut aria-label

L'attribut aria-label permet d'ajouter un label à un élément. Ce label est lu par les lecteurs d'écran. Il est donc important de décrire l'élément de manière précise.  

```html
<button aria-label="Description du bouton">Bouton</button>
```

## Ajouter l'attribut aria-role

L'attribut aria-role permet d'ajouter un rôle à un élément. Ce rôle est lu par les lecteurs d'écran. Il est donc important de décrire l'élément de manière précise.  

```html
<button aria-role="button">Bouton</button>
```

### Liste des rôles  

!!! manuel 
    [Liste des rôles ARIA](https://www.w3.org/TR/wai-aria-1.0/roles#role_definitions)  

## Ajoute de labels aux champs de formulaires  

Les champs de formulaires sont des éléments importants d'un site Web. Ils permettent aux utilisateurs de saisir des informations. Cependant, les champs de formulaires ne sont pas accessibles aux personnes malvoyantes. Il est donc important de rendre les champs de formulaires accessibles.

### Ajouter un label

L'attribut label permet d'ajouter un label à un champ de formulaire. Ce label est lu par les lecteurs d'écran. Il est donc important de décrire le champ de formulaire de manière précise.  

```html
<label for="nom">Nom</label>
<input type="text" id="nom" name="nom">
```

## Regrouper les champs de formulaires  

C'est important de regrouper ensemble les champs de formulaires qui sont liés. Cela permet aux utilisateurs de mieux comprendre le formulaire et de mieux naviguer sur votre site Web.

### Ajouter un fieldset

L'élément fieldset permet de regrouper ensemble les champs de formulaires qui sont liés. Il est important de bien utiliser l'élément fieldset.  

```html
<fieldset>
  <legend>Informations personnelles</legend>
  <label for="nom">Nom</label>
  <input type="text" id="nom" name="nom">
  <label for="prenom">Prénom</label>
  <input type="text" id="prenom" name="prenom">
</fieldset>
```




