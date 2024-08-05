import { Router, Request, Response, NextFunction } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../common/Paths';

import AnimalRoutes from './AnimalRoutes';
import Animal from '@src/models/Animal';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// ** Validation d'un animal ** //
function validateAnimal(req: Request, res: Response, next: NextFunction) {
  if (req.body === null) {
    res
      .status(HttpStatusCodes.BAD_REQUEST)
      .send({ error: 'Animal requis' })
      .end();
    return;
  }

  if (req.body.animal === null) {
    res
      .status(HttpStatusCodes.BAD_REQUEST)
      .send({ error: 'Animal requis' })
      .end();
    return;
  }

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
