import { Router } from 'express';

import Paths from '@src/common/constants/Paths';
import AuteurRoutes from './AuteurRoutes';

/******************************************************************************
                                Setup
******************************************************************************/

const apiRouter = Router();

// ** Add AuteurRouter ** //

// Init router
const auteurRouter = Router();

auteurRouter.get(Paths.Auteur.Get, AuteurRoutes.getAll);
auteurRouter.post(Paths.Auteur.Add, AuteurRoutes.add);
auteurRouter.put(Paths.Auteur.Update, AuteurRoutes.update);
auteurRouter.delete(Paths.Auteur.Delete, AuteurRoutes.delete);

// Add AuteurRouter
apiRouter.use(Paths.Auteur.Base, auteurRouter);

/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
