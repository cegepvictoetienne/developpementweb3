import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import AnimalService from '@src/services/AnimalService';
import { IAnimal } from '@src/models/Animal';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Lire tous les animaux.
 */
async function getAll(_: IReq, res: IRes) {
  const animaux = await AnimalService.getAll();
  return res.status(HttpStatusCodes.OK).json({ animaux });
}

/**
 * Ajoute un animal.
 */
async function add(req: IReq<{ animal: IAnimal }>, res: IRes) {
  let { animal } = req.body;
  animal = await AnimalService.addOne(animal);
  return res.status(HttpStatusCodes.CREATED).json({ animal });
}

/**
 * Mise à jour d'un animal.
 */
async function update(req: IReq<{ animal: IAnimal }>, res: IRes) {
  let { animal } = req.body;
  animal = await AnimalService.updateOne(animal);
  return res.status(HttpStatusCodes.OK).json({ animal });
}

/**
 * Supprimer un animal.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await AnimalService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
