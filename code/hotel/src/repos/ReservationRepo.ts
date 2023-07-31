import { IReservation } from '@src/models/Reservation';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';

// **** Functions **** //

/**
 * Extraire une réservation.
 */
async function getOne(courrielClient: string): Promise<IReservation | null> {
  const db = await orm.openDb();
  for (const reservation of db.reservations) {
    if (reservation.courrielClient === courrielClient) {
      return reservation;
    }
  }
  return null;
}

/**
 * Vérifier si une réservation avec l'ID existe
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const reservation of db.reservations) {
    if (reservation.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Extraire toutes les réservations.
 */
async function getAll(): Promise<IReservation[]> {
  const db = await orm.openDb();
  return db.reservations;
}

/**
 * Ajouter une réservation.
 */
async function add(reservation: IReservation): Promise<void> {
  const db = await orm.openDb();
  reservation.id = getRandomInt();
  db.reservations.push(reservation);
  return orm.saveDb(db);
}

/**
 * Mettre à jour une réservation
 */
async function update(reservation: IReservation): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.reservations.length; i++) {
    if (db.reservations[i].id === reservation.id) {
      db.reservations[i] = reservation;
      return orm.saveDb(db);
    }
  }
}

/**
 * Supprimer une réservation.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.reservations.length; i++) {
    if (db.reservations[i].id === id) {
      db.reservations.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}

// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
