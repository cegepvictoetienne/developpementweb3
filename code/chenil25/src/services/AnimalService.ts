import { RouteError } from '@src/common/util/route-errors';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';

import AnimalRepo from '@src/repos/AnimalRepo';
import { IAnimal } from '@src/models/Animaux';

/******************************************************************************
                                Constants
******************************************************************************/

export const ANIMAL_NOT_FOUND_ERR = 'Animal non trouvé';

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Get all users.
 */
function getAll(): Promise<IAnimal[]> {
  return AnimalRepo.getAll();
}

/**
 * Add one user.
 */
function addOne(animal: IAnimal): Promise<void> {
  return AnimalRepo.add(animal);
}

/**
 * Update one user.
 */
async function updateOne(animal: IAnimal): Promise<void> {
  const persists = await AnimalRepo.persists(animal.id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, ANIMAL_NOT_FOUND_ERR);
  }
  // Return user
  return AnimalRepo.update(animal);
}

/**
 * Delete a user by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await AnimalRepo.persists(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, ANIMAL_NOT_FOUND_ERR);
  }
  // Delete user
  return AnimalRepo.delete(id);
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
