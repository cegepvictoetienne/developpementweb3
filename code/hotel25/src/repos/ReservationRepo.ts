import { IReservation } from '@src/models/Reservation';
import { getRandomInt } from '@src/common/util/misc';

import orm from './MockOrm';


/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Extraire une réservation.
 */
async function getOne(courriel: string): Promise<IReservation | null> {
  const db = await orm.openDb();
  for (const reservation of db.reservations) {
    if (reservation.courriel === courriel) {
      return reservation;
    }
  }
  return null;
}

/**
 * Vérifier si une réservation existe pour cet id.
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
 * Mettre à jour une réservation.
 */
async function update(reservation: IReservation): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.reservations.length; i++) {
    if (db.reservations[i].id === reservation.id) {
      const dbReservation = db.reservations[i];
      db.reservations[i] = {
        ...dbReservation,
        nom: reservation.nom,
        courriel: reservation.courriel,
        dateDebut: reservation.dateDebut,
        dateFin: reservation.dateFin,
        typeChambre: reservation.typeChambre,
        prixParNuit: reservation.prixParNuit,
      };
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


// **** Unit-Tests Only **** //

/**
 * Supprimer toutes les réservations.
 */
async function deleteAllReservations(): Promise<void> {
  const db = await orm.openDb();
  db.reservations = [];
  return orm.saveDb(db);
}

/**
 * Insérer plusieurs réservations
 */
async function insertMult(
  reservations: IReservation[] | readonly IReservation[],
): Promise<IReservation[]> {
  const db = await orm.openDb(),
    reservationsF = [ ...reservations ];
  for (const reservation of reservationsF) {
    reservation.id = getRandomInt();
    reservation.created = new Date();
  }
  db.reservations = [ ...db.reservations, ...reservations ];
  await orm.saveDb(db);
  return reservationsF;
}


/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
  deleteAllReservations,
  insertMult,
} as const;
