import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import AuteurService from '@src/services/AuteurService';
import { IAuteur } from '@src/models/Auteur';

import { IReq, IRes } from './common/types';

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Extraire tous les auteurs
 */
async function getAll(_: IReq, res: IRes) {
  const auteurs = await AuteurService.getAll();
  res.status(HttpStatusCodes.OK).json({ auteurs });
}

/**
 * Ajouter un auteur
 */
async function add(req: IReq, res: IRes) {
  const { auteur } = req.body;
  await AuteurService.addOne(auteur as IAuteur);
  res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Mettre à jour un auteur
 */
async function update(req: IReq, res: IRes) {
  const { auteur } = req.body;
  await AuteurService.updateOne(auteur as IAuteur);
  res.status(HttpStatusCodes.OK).end();
}

/**
 * Supprimer un auteur
 */
async function delete_(req: IReq, res: IRes) {
  const { id } = req.params;
  await AuteurService.delete(id as string);
  res.status(HttpStatusCodes.OK).end();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
