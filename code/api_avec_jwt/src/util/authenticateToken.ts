import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
/**
 * Intergiciel pour authentifier le jeton de l'utilisateur
 *
 * @param {Request} req - La requête au serveur
 * @param {Response} res - La réponse du serveur
 * @param {NextFunction} next - La fonction a appeler pour continuer le processus.
 */
function authenticateToken(req: Request, res: Response, next: NextFunction) {
  // Ne pas vérifier le token si l'url est celui de generateToken
  const lastPartOfUrl = req.url.split('/').at(-1);
  if (lastPartOfUrl === 'generatetoken') {
    next();
    return;
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    next();
  });
}

export default authenticateToken;
