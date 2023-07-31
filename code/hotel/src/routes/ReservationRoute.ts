import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ReservationService from '@src/services/ReservationService';
import { IReservation } from '@src/models/Reservation';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Extraire toutes les réservations.
 */
async function getAll(_: IReq, res: IRes) {
  const reservations = await ReservationService.getAll();
  return res.status(HttpStatusCodes.OK).json({ reservations });
}

/**
 * Ajouter une réservation.
 */
async function add(req: IReq<{ reservation: IReservation }>, res: IRes) {
  const { reservation } = req.body;
  await ReservationService.addOne(reservation);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Mettre à jour une réservation.
 */
async function update(req: IReq<{ reservation: IReservation }>, res: IRes) {
  const { reservation } = req.body;
  await ReservationService.updateOne(reservation);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Supprimer une réservation.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await ReservationService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
