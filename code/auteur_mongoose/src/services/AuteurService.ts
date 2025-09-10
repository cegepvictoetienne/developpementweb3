import { RouteError } from '@src/common/util/route-errors';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';

import AuteurRepo from '@src/repos/AuteurRepo';
import { IAuteur } from '@src/models/Auteur';

/******************************************************************************
                                Constants
******************************************************************************/

export const AUTEUR_NON_TROUVE = 'Auteur non trouvé';

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Extraire tous les auteurs.
 */
function getAll(): Promise<IAuteur[]> {
  return AuteurRepo.getAll();
}

/**
 * Ajouter un auteur.
 */
function addOne(auteur: IAuteur): Promise<void> {
  return AuteurRepo.add(auteur);
}

/**
 * Mets à jour un auteur.
 */
async function updateOne(auteur: IAuteur): Promise<void> {
  const persists = await AuteurRepo.getOne(auteur.id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, AUTEUR_NON_TROUVE);
  }
  // Return auteur
  return AuteurRepo.update(auteur);
}

/**
 * Supprimer un auteur par son id
 */
async function _delete(id: string): Promise<void> {
  const persists = await AuteurRepo.getOne(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, AUTEUR_NON_TROUVE);
  }
  // Delete auteur
  return AuteurRepo.delete(id);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
