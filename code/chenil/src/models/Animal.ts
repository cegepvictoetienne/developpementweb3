import mongoose, { Schema, model } from 'mongoose';

// **** Types **** //

const AnimalTypes = ['Chien', 'Chat'];

export interface IAnimal {
  nom: string;
  age: number;
  type: string;
  proprietaire: string;
  telephone: string;
  _id?: string;
}

// **** Schema **** //
const AnimalSchema = new Schema<IAnimal>({
  nom: { type: String, required: [true, 'Le nom est obligatoire'] },
  age: {
    type: Number,
    required: [true, "L'âge est obligatoire"],
    min: [1, "L'âge doit être plus grand que 0"],
  },
  type: {
    type: String,
    required: [true, 'Le type est obligatoire'],
    enum: {
      values: AnimalTypes,
      message: 'Le type doit être un chien ou un chat',
    },
  },
  proprietaire: {
    type: String,
    required: [true, 'Le propriétaire est obligatoire'],
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
export default model<IAnimal>('animaux', AnimalSchema);
