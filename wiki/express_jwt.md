# Express et JWT  

JWT (JSON Web Token) permet d’authentifier un utilisateur lors de chaque appel aux API.  

- Le jeton (token) est généré par le serveur, qui s’assure que l’utilisateur est bien celui qu’il prétend.  
- Le jeton est envoyé au client et ce dernier le conserve dans un témoin (cookie) pour l’utiliser à chaque appel d’API.  
- Un middleware sur le serveur valide chaque appel d’API en vérifiant le jeton.  
- Si le jeton n’est pas valide, l’API ne retourne pas de données.  

Pour plus d'information :  

- [Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Token)  

## Installer le module pour créer et valider les jetons  

``` nodejsrepl title="console"
npm install jsonwebtoken @types/jsonwebtoken
```

## La route  

``` ts title="jetonsRoute.ts"  
import JetonService from '@src/services/JetonService';
import { IUtilisateur } from '@src/models/Utilisateur';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * generate token.
 */
async function generateToken(
  req: IReq<{ utilisateur: IUtilisateur }>,
  res: IRes
) {
  const { utilisateur } = req.body;
  const token = await JetonService.generateToken(utilisateur);
  return res.send(token);
}

// **** Export default **** //

export default {
  generateToken,
} as const;

```

## Le service de génération de jetons    


``` ts title="jetonsService.ts"  
import { IReq, IRes } from '@src/routes/types/express/misc';
import { NextFunction } from 'express';

// **** Variables **** //

export const UTILISATEUR_NOT_FOUND_ERR = 'Utilisateur non trouvé';

// **** Functions **** //

/**
 * Generate Token.
 */
async function generateToken(utilisateur: IUtilisateur): Promise<string> {
  const utilisateurBD = await UtilisateurService.getOne(utilisateur.email);
  if (
    utilisateurBD &&
    (await pwdUtil.compare(utilisateur.motdepasse, utilisateurBD.motdepasse))
  ) {
    return jwt.sign(utilisateur.email, process.env.JWT_SECRET as string);
  } else {
    return '';
  }
}

```


## L'intergiciel de vérification de jetons  

``` ts title="jetonsService.ts"  
function authenticateToken(req: IReq, res: IRes, next: NextFunction) {
  // Ne pas vérifier le token si l'url est celui de generateToken
  const lastPartOfUrl = req.url.split('/').at(-1);
  if (lastPartOfUrl === 'generateToken') {
    next();
    return;
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);
  console.log(`In authenticateToken. secret is ${process.env.JWT_SECRET}`);
  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.utilisateur = user;

    next();
  });
}

```

