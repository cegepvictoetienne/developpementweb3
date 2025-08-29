import { IAnimal } from '@src/models/Animaux';
import { getRandomInt } from '@src/common/util/misc';

import orm from './MockOrm';

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Get one user.
 */
async function getOne(proprietaire: string): Promise<IAnimal | null> {
  const db = await orm.openDb();
  for (const animal of db.animaux) {
    if (animal.proprietaire === proprietaire) {
      return animal;
    }
  }
  return null;
}

/**
 * See if a user with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const animal of db.animaux) {
    if (animal.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all users.
 */
async function getAll(): Promise<IAnimal[]> {
  const db = await orm.openDb();
  return db.animaux;
}

/**
 * Add one user.
 */
async function add(animal: IAnimal): Promise<void> {
  const db = await orm.openDb();
  animal.id = getRandomInt();
  db.animaux.push(animal);
  return orm.saveDb(db);
}

/**
 * Update a user.
 */
async function update(animal: IAnimal): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.animaux.length; i++) {
    if (db.animaux[i].id === animal.id) {
      const dbUser = db.animaux[i];
      db.animaux[i] = {
        ...dbUser,
        nom: animal.nom,
        type: animal.type,
        age: animal.age,
        proprietaire: animal.proprietaire,
      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one user.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.animaux.length; i++) {
    if (db.animaux[i].id === id) {
      db.animaux.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}

// **** Unit-Tests Only **** //

/**
 * Delete every user record.
 */
async function deleteAllAnimaux(): Promise<void> {
  const db = await orm.openDb();
  db.animaux = [];
  return orm.saveDb(db);
}

/**
 * Insert multiple users. Can't do multiple at once cause using a plain file
 * for nmow.
 */
async function insertMult(
  animaux: IAnimal[] | readonly IAnimal[],
): Promise<IAnimal[]> {
  const db = await orm.openDb(),
    animauxF = [...animaux];
  for (const animal of animauxF) {
    animal.id = getRandomInt();
  }
  db.animaux = [...db.animaux, ...animaux];
  await orm.saveDb(db);
  return animauxF;
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
  deleteAllAnimaux,
  insertMult,
} as const;
