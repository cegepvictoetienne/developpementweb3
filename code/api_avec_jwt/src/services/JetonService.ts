// **** Variables **** //

import { IUserLogin } from '@src/models/User';
import UserService from './UserService';
import jwt from 'jsonwebtoken';

export const UTILISATEUR_NOT_FOUND_ERR = 'Utilisateur non trouvé';

// **** Functions **** //

/**
 * Générer un jeton pour un utilisateur
 *
 * @param {IUtilisateur} utilisateur - L'utilisateur demandant le jeton
 * @returns {Promise} - Le jeton signé
 */
async function generateToken(utilisateur: IUserLogin): Promise<string> {
  const utilisateurBD = (await UserService.getAll()).filter(
    (user) => user.email === utilisateur.email
  )[0];
  if (utilisateurBD && utilisateurBD.password === utilisateur.password) {
    return jwt.sign(utilisateur.email, process.env.JWT_SECRET as string);
  } else {
    return '';
  }
}

// **** Export default **** //
export default {
  generateToken,
} as const;
