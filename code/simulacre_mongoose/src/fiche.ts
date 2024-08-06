import mongoose, { Schema, model } from 'mongoose';

// **** Types **** //

export interface IFiche {
  nom: string;
  age: number;
  adresse: string;
  courriel: string;
  telephone: string;
  _id?: string;
}

// **** Schema **** //
const AnimalSchema = new Schema<IFiche>({
  nom: { type: String, required: [true, 'Le nom est obligatoire'] },
  age: {
    type: Number,
    required: [true, "L'âge est obligatoire"],
    min: [1, "L'âge doit être plus grand que 0"],
  },
  adresse: {
    type: String,
    required: [true, "L'adresse est obligatoire"],
  },
  courriel: {
    type: String,
    required: [true, 'Le courriel est obligatoire'],
  },
  telephone: {
    type: String,
    required: [true, 'Le numéro de téléphone est obligatoire'],
    validate: {
      // Code inspiré de la documentation de Mongoose sur les validateurs personnalisés
      // https://mongoosejs.com/docs/validation.html#custom-validators
      validator: function (v: string) {
        return /^(?:\+\d{1,3}\s?)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/.test(
          v
        );
      },
      message: (props) =>
        `${props.value} n'est pas un numéro de téléphone valide!`,
    },
  },
});

// **** Export **** //
mongoose.pluralize(null);
export default model<IFiche>('fiches', AnimalSchema);
