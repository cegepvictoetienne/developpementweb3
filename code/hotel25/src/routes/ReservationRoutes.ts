import { isNumber } from 'jet-validators';
import { transform } from 'jet-validators/utils';

import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import ReservationService from '@src/services/ReservationService';

import { IReq, IRes } from './common/types';
import { parseReq } from './common/util';
import Reservation from '@src/models/Reservation';


/******************************************************************************
                                Constants
******************************************************************************/

const Validators = {
  add: parseReq({ reservation: Reservation.test }),
  update: parseReq({ reservation: Reservation.test }),
  delete: parseReq({ id: transform(Number, isNumber) }),
} as const;


/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Extraire toutes les réservations.
 */
async function getAll(_: IReq, res: IRes) {
  const reservations = await ReservationService.getAll();
  res.status(HttpStatusCodes.OK).json({ reservations });
}

/**
 * Ajouter une réservation.
 */
async function add(req: IReq, res: IRes) {
  const { reservation } = Validators.add(req.body);
  await ReservationService.addOne(reservation);
  res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq, res: IRes) {
  const { reservation } = Validators.update(req.body);
  await ReservationService.updateOne(reservation);
  res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const { id } = Validators.delete(req.params);
  await ReservationService.delete(id);
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
