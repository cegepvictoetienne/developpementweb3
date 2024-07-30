import HttpStatusCodes from '@src/common/HttpStatusCodes';

import ReservationService from '@src/services/ReservationService';
import { IReservation } from '@src/models/Reservation';
import { IReq, IRes } from './types/express/misc';

// **** Functions **** //

/**
 * Extraire toutes les réservations.
 *
 * @param {IReq} _ - non utilisé
 * @param {IRes} res - Réponse du serveur
 *
 * @returns {string} - Tableau des réservations en JSON
 */
async function getAll(_: IReq, res: IRes) {
  const reservations = await ReservationService.getAll();
  return res.status(HttpStatusCodes.OK).json({ reservations });
}

/**
 * Ajouter une réservation.
 *
 * @param {IReq} req - Requête au serveur avec une réservation
 * @param {IRes} res - Réponse du serveur
 */
async function add(req: IReq<{ reservation: IReservation }>, res: IRes) {
  const { reservation } = req.body;
  await ReservationService.addOne(reservation);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Mettre à jour une réservation.
 *
 * @param {IReq} req - Requête au serveur avec une réservation
 * @param {IRes} res - Réponse du serveur
 */
async function update(req: IReq<{ reservation: IReservation }>, res: IRes) {
  const { reservation } = req.body;
  await ReservationService.updateOne(reservation);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Supprimer une réservation.
 *
 * @param {IReq} req - Requête au serveur avec l'id d'une réservation
 * @param {IRes} res - Réponse du serveur
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
