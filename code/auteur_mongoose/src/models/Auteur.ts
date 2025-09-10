import { Schema, model } from 'mongoose';

// Interface pour un auteur
// Notez l'utilisation de id au lieu de _id.
// Mongoose crée automatiquement un _id pour chaque document.
export interface IAuteur {
  id: string;
  prenom: string;
  nom: string;
  date_naissance?: Date;
  date_deces?: Date;
}

const AuteurSchema = new Schema<IAuteur>({
  id: { type: String, required: true, maxlength: 100 },
  prenom: { type: String, required: true, maxlength: 100 },
  nom: { type: String, required: true, maxlength: 100 },
  date_naissance: Date,
  date_deces: Date,
});

export const Auteur = model<IAuteur>('Auteur', AuteurSchema);
