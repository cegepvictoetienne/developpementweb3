import { isNumber, isString, isEnumVal } from 'jet-validators';
import { parseObject, TParseOnError } from 'jet-validators/utils';

import { isRelationalKey, transIsDate } from '@src/common/util/validators';
import { IModel } from './common/types';


/******************************************************************************
                                 Constants
******************************************************************************/

const DEFAULT_RESERVATION_VALS = (): IReservation => ({
  id: -1,
  nom: '',
  courriel: '',
  dateDebut: new Date(),
  dateFin: new Date(),
  typeChambre: TypeChambre.Standard,
  prixParNuit: 0,
  created: new Date(), // Vient du IModel pour la date de création
});


/******************************************************************************
                                  Types
******************************************************************************/

export enum TypeChambre {
  Standard='Standard',
  Deluxe='Deluxe',
}

export interface IReservation extends IModel {
  nom: string;
  courriel: string;
  dateDebut: Date;
  dateFin: Date;
  typeChambre: TypeChambre;
  prixParNuit: number;
}


/******************************************************************************
                                  Setup
******************************************************************************/
// Crée une validation pour l'énumération de type de chambre
const isTypeChambreEnumVal = isEnumVal(TypeChambre);

// Initialize the "parseUser" function
const parseReservation = parseObject<IReservation>({
  id: isRelationalKey,
  nom: isString,
  courriel: isString,
  dateDebut: transIsDate,
  dateFin: transIsDate,
  prixParNuit: isNumber,
  typeChambre: isTypeChambreEnumVal, 
  created: transIsDate,
});


/******************************************************************************
                                 Functions
******************************************************************************/

/**
 * Nouvel objet de réservation.
 */
function __new__(reservation?: Partial<IReservation>): IReservation {
  const retVal = { ...DEFAULT_RESERVATION_VALS(), ...reservation };
  return parseReservation(retVal, errors => {
    throw new Error('Création a échouée ' + JSON.stringify(errors, null, 2));
  });
}

/**
 * Valide si l'objet est une réservation, pour la route.
 */
function test(arg: unknown, errCb?: TParseOnError): arg is IReservation {
  return !!parseReservation(arg, errCb);
}


/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: __new__,
  test,
} as const;