import jsonfile from 'jsonfile';

import { IReservation } from '@src/models/Reservation';

// **** Variables **** //

const DB_FILE_NAME = 'database.json';

// **** Types **** //

interface IDb {
  reservations: IReservation[];
}

// **** Functions **** //

/**
 * Extraire le JSON de la base de données.
 *
 * @returns {IDb} Un JSON représentant une base de données
 */
function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDb>;
}

/**
 * Mettre à jour la base de données.
 *
 * @param {IDb} db - JSON représentant la BD
 */
function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile(__dirname + '/' + DB_FILE_NAME, db);
}

// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
