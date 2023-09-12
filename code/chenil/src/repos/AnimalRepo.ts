import Animal, { IAnimal } from '@src/models/Animal';

// **** Functions **** //

/**
 * Lire un animal.
 */
async function getOne(id: string): Promise<IAnimal | null> {
  const animal = Animal.findById(id);

  return animal;
}

/**
 * Vérifie si l'animal existe.
 */
async function persists(id: string): Promise<boolean> {
  const animal = Animal.findById(id);

  return animal !== null;
}

/**
 * Lire tous les animaux.
 */
async function getAll(): Promise<IAnimal[]> {
  const animaux = Animal.find();
  return animaux;
}

/**
 * Ajoute un animal.
 */
async function add(animal: IAnimal): Promise<IAnimal> {
  const nouvelAnimal = new Animal(animal);
  await nouvelAnimal.save();
  return nouvelAnimal;
}

/**
 * Mets à jour un animal.
 */
async function update(animal: IAnimal): Promise<IAnimal> {
  const animalToUpdate = await Animal.findById(animal._id);
  if (animalToUpdate === null) {
    throw new Error('Animal non trouvé');
  }
  animalToUpdate.nom = animal.nom;
  animalToUpdate.age = animal.age;
  animalToUpdate.type = animal.type;
  animalToUpdate.proprietaire = animal.proprietaire;
  animalToUpdate.telephone = animal.telephone;
  await animalToUpdate.save();
  return animalToUpdate;
}

/**
 * Supprimer un animal.
 */
async function delete_(id: string): Promise<void> {
  await Animal.findByIdAndDelete(id);
}

// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
