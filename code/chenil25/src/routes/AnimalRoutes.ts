import { isNumber } from 'jet-validators';
import { transform } from 'jet-validators/utils';

import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import AnimalService from '@src/services/AnimalService';
import Animal from '@src/models/Animaux';

import { IReq, IRes } from './common/types';
import { parseReq } from './common/util';

/******************************************************************************
                                Constants
******************************************************************************/

const Validators = {
  add: parseReq({ animal: Animal.test }),
  update: parseReq({ animal: Animal.test }),
  delete: parseReq({ id: transform(Number, isNumber) }),
} as const;

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const animaux = await AnimalService.getAll();
  res.status(HttpStatusCodes.OK).json({ animaux: animaux });
}

/**
 * Add one user.
 */
async function add(req: IReq, res: IRes) {
  const { animal } = Validators.add(req.body);
  await AnimalService.addOne(animal);
  res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq, res: IRes) {
  const { animal } = Validators.update(req.body);
  await AnimalService.updateOne(animal);
  res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const { id } = Validators.delete(req.params);
  await AnimalService.delete(id);
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
