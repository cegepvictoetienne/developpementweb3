import { NextFunction, Request, Response, Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import AnimalRoutes from './AnimalRoutes';
import Animal, { IAnimal } from '@src/models/Animal';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// ** Validation d'un animal ** //
function validateAnimal(req: Request, res: Response, next: NextFunction) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nouvelAnimal = new Animal(req.body.animal);
  const error = nouvelAnimal.validateSync();
  if (error !== null && error !== undefined) {
    res.status(HttpStatusCodes.BAD_REQUEST).send(error).end();
  } else {
    next();
  }
}

// ** Ajoute AnimalRouter ** //

const animalRouter = Router();

// Lire tous les animaux
animalRouter.get(Paths.Animaux.Get, AnimalRoutes.getAll);

// Ajouter un animal
animalRouter.post(Paths.Animaux.Add, validateAnimal, AnimalRoutes.add);

// Mettre à jour un animal
animalRouter.put(Paths.Animaux.Update, validateAnimal, AnimalRoutes.update);

// Supprimer un animal
animalRouter.delete(
  Paths.Animaux.Delete,
  validate(['id', 'string', 'params']),
  AnimalRoutes.delete
);

// Add AnimalRouter
apiRouter.use(Paths.Animaux.Base, animalRouter);

// **** Export default **** //

export default apiRouter;
