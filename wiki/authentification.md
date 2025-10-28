# Authentification  

L'authentification joue un rôle crucial dans la sécurité et la protection des données des utilisateurs, en vérifiant leur identité avant de leur accorder l'accès à des fonctionnalités restreintes.  


L'application dorsale utilisée dans l'exemple suivant est une application Express avec une route pour générer un jeton et une route pour la liste des utilisateurs.

Commençons par le contexte de l'application React :  


``` ts title="/src/contexts/LoginContext.tsx"  
{!site-auth/src/contexts/LoginContext.tsx!}
```

Le contexte se charge de faire l'appel à l'API pour authentifier l'utilisateur avec son courriel et son mot de passe et à conserver le jeton qui sera utilisé plus tard.  

Allons voir la page de login :  

``` ts title="/src/components/Login/Login.tsx"  
{!site-auth/src/components/Login/Login.tsx!}
```

Bâtissons le reste de l'application :  

``` ts title="/src/components/Menu/Menu.tsx"  
{!site-auth/src/components/Menu/Menu.tsx!}
```

``` ts title="/src/components/UserList/UserList.tsx"  
{!site-auth/src/components/UserList/UserList.tsx!}
```

Notez bien la manière de faire un **get** avec le jeton :  

```
        axios.get('http://localhost:3001/api/users/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUserList(response.data.users));
```

``` ts title="/src/App.tsx"  
{!site-auth/src/App.tsx!}
```

