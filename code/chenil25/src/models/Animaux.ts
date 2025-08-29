import { isString, isNumber, isEnumVal } from 'jet-validators';
import { parseObject, TParseOnError } from 'jet-validators/utils';

import { isRelationalKey } from '@src/common/util/validators';
import { IModel } from './common/types';

/******************************************************************************
                                 Constants
******************************************************************************/

const DEFAULT_ANIMAL_VALS = (): IAnimal => ({
  id: -1,
  nom: '',
  type: TypeAnimal.Chat,
  age: 1,
  proprietaire: '',
});

/******************************************************************************
                                  Types
******************************************************************************/

export enum TypeAnimal {
  Chat = 'chat',
  Chien = 'chien',
}

export interface IAnimal extends IModel {
  nom: string;
  type: TypeAnimal;
  age: number;
  proprietaire: string;
}

/******************************************************************************
                                  Setup
******************************************************************************/
// Crée une validation pour l'énumération de type d'animal
const isTypeAnimalEnumVal = isEnumVal(TypeAnimal);

// Initialize the "parseUser" function
const parseAnimal = parseObject<IAnimal>({
  id: isRelationalKey,
  nom: isString,
  type: isTypeAnimalEnumVal,
  age: isNumber,
  proprietaire: isString,
});

/******************************************************************************
                                 Functions
******************************************************************************/

/**
 * New user object.
 */
function __new__(animal?: Partial<IAnimal>): IAnimal {
  const retVal = { ...DEFAULT_ANIMAL_VALS(), ...animal };
  return parseAnimal(retVal, (errors) => {
    throw new Error('Setup new user failed ' + JSON.stringify(errors, null, 2));
  });
}

/**
 * Check is a user object. For the route validation.
 */
function test(arg: unknown, errCb?: TParseOnError): arg is IAnimal {
  return !!parseAnimal(arg, errCb);
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  new: __new__,
  test,
} as const;
