import ENV from "@src/common/constants/ENV";
import { IAuteur, Auteur } from "@src/models/Auteur";

import mongoose from "mongoose";

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Extraire un auteur.
 *
 * @param {string} id - ID de l'auteur à extraire
 *
 * @returns {IAuteur} - Un auteur si trouvé
 */

async function getOne(id: string): Promise<IAuteur | null> {
  const auteur = await Auteur.findOne({
    id: id,
  });
  return auteur;
}

/**
 * Extraire tous les auteurs.
 *
 * @returns {IAuteur[]} Un tableau de tous les auteurs
 */
async function getAll(): Promise<IAuteur[]> {
  const auteurs = await Auteur.find();
  return auteurs;
}

/**
 * Ajouter un auteur.
 *
 * @param {IAuteur} auteur - Auteur à ajouter
 */

async function add(auteur: IAuteur): Promise<void> {
  const nouvelAuteur = new Auteur(auteur);
  await nouvelAuteur.save();
}

/**
 * Mettre à jour un auteur.
 *
 * @param {IAuteur} auteur - Auteur à modifier
 */
async function update(auteur: IAuteur): Promise<void> {
  const auteurAModifier = await Auteur.findOne({ id: auteur.id });
  if (auteurAModifier === null) {
    throw new Error("Auteur non trouvé");
  }
  auteurAModifier.nom = auteur.nom;
  auteurAModifier.prenom = auteur.prenom;
  auteurAModifier.date_naissance = auteur.date_naissance;
  auteurAModifier.date_deces = auteur.date_deces;
  await auteurAModifier.save();
}

/**
 * Supprimer un auteur.
 *
 * @param {string} id -  id de l'auteur à supprimer
 */
async function delete_(id: string): Promise<void> {
  await Auteur.deleteOne({ id: id });
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getOne,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
