import ReservationRepo from '@src/repos/ReservationRepo';
import { IReservation } from '@src/models/Reservation';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

// **** Variables **** //

export const RESERVATION_NOT_FOUND_ERR = 'Réservation non trouvée';

// **** Functions **** //

/**
 * Extraire toutes les réservations.
 */
function getAll(): Promise<IReservation[]> {
  return ReservationRepo.getAll();
}

/**
 * Ajouter une réservation.
 */
function addOne(reservation: IReservation): Promise<void> {
  return ReservationRepo.add(reservation);
}

/**
 * Mettre à jour une réservation.
 */
async function updateOne(reservation: IReservation): Promise<void> {
  const persists = await ReservationRepo.persists(reservation.id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, RESERVATION_NOT_FOUND_ERR);
  }
  // Retourner la réservation
  return ReservationRepo.update(reservation);
}

/**
 * Efface une réservation par son ID
 */
async function _delete(id: number): Promise<void> {
  const persists = await ReservationRepo.persists(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, RESERVATION_NOT_FOUND_ERR);
  }
  // Efface la réservation
  return ReservationRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
