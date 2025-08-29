import { Router } from 'express';

import Paths from '@src/common/constants/Paths';
import AnimalRoutes from './AnimalRoutes';

/******************************************************************************
                                Setup
******************************************************************************/

const apiRouter = Router();

// ** Add animalRouter ** //

// Init router
const animalRouter = Router();

// Get all users
animalRouter.get(Paths.Chenil.Get, AnimalRoutes.getAll);
animalRouter.post(Paths.Chenil.Add, AnimalRoutes.add);
animalRouter.put(Paths.Chenil.Update, AnimalRoutes.update);
animalRouter.delete(Paths.Chenil.Delete, AnimalRoutes.delete);

// Add UserRouter
apiRouter.use(Paths.Chenil.Base, animalRouter);

/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
