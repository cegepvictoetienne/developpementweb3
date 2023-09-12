import AnimalRepo from '@src/repos/AnimalRepo';
import { IAnimal } from '@src/models/Animal';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

// **** Variables **** //

export const ANIMAL_NOT_FOUND_ERR = 'Animal non trouvé';

// **** Functions **** //

/**
 * Lire tous les animaux.
 */
function getAll(): Promise<IAnimal[]> {
  return AnimalRepo.getAll();
}

/**
 * Ajouter un animal.
 */
function addOne(animal: IAnimal): Promise<IAnimal> {
  return AnimalRepo.add(animal);
}

/**
 * Mise à jour d'un animal.
 */
async function updateOne(animal: IAnimal): Promise<IAnimal> {
  const persists = await AnimalRepo.persists(animal._id!);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, ANIMAL_NOT_FOUND_ERR);
  }
  // Return user
  return AnimalRepo.update(animal);
}

/**
 * Supprimer un animal par son ID.
 */
async function _delete(id: string): Promise<void> {
  const persists = await AnimalRepo.persists(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, ANIMAL_NOT_FOUND_ERR);
  }
  // Supprimer l'animal
  return AnimalRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
