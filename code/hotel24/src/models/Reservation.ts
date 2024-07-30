// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM =
  'nameOrObj arg must a string or an ' +
  'object with the appropriate user keys.';

export enum TypeChambre {
  Standard,
  Deluxe,
}

// **** Types **** //

export interface IReservation {
  id: number;
  nomClient: string;
  courrielClient: string;
  dateDebut: string;
  dateFin: string;
  typeChambre: TypeChambre;
  prixParNuit: number;
}

// **** Functions **** //

/**
 * Créer une réservation.
 *
 * @param {string=} nomClient - Le nom du client
 * @param {string=} courrielClient - L'adresse de courriel du client
 * @param {string=} dateDebut - Date de début de la réservation
 * @param {string=} dateFin - Date de fin de la réservation
 * @param {TypeChambre=} typeChambre - Le type de chambre réservée
 * @param {number=} prixParNuit - Le prix de la chambre par nuit
 * @param {number=} id - ID de la réservation dans la BD
 */
function new_(
  nomClient?: string,
  courrielClient?: string,
  dateDebut?: string,
  dateFin?: string,
  typeChambre?: TypeChambre,
  prixParNuit?: number,
  id?: number // id last cause usually set by db
): IReservation {
  return {
    id: id ?? -1,
    nomClient: nomClient ?? '',
    courrielClient: courrielClient ?? '',
    dateDebut: dateDebut ?? '',
    dateFin: dateFin ?? '',
    typeChambre: typeChambre ?? TypeChambre.Standard,
    prixParNuit: prixParNuit ?? 0,
  };
}

/**
 * Extraire une réservation d'un objet.
 *
 * @param {object} param - Objet représentant une réservation
 *
 * @returns {IReservation} - Une réservation
 */
function from(param: object): IReservation {
  // Check is réservation
  if (!isReservation(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get user instance
  const p = param as IReservation;
  return new_(
    p.nomClient,
    p.courrielClient,
    p.dateDebut,
    p.dateFin,
    p.typeChambre,
    p.prixParNuit,
    p.id
  );
}

/**
 * Vérifier si l'objet représente une réservation
 *
 * @param {unknown} arg - Un paramètre qui pourrait être une réservation
 *
 * @returns {boolean} - Vrai si c'est une réservation
 */
function isReservation(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    'nomClient' in arg &&
    'courrielClient' in arg &&
    'dateDebut' in arg &&
    'dateFin' in arg &&
    'typeChambre' in arg &&
    'prixParNuit' in arg
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isReservation,
} as const;
