import { Request, Response, NextFunction, Router } from 'express';

import Paths from '@src/common/constants/Paths';
import AuteurRoutes from './AuteurRoutes';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import { Auteur } from '@src/models/Auteur';

/******************************************************************************
                                Setup
******************************************************************************/

const apiRouter = Router();

// ** Add AuteurRouter ** //
// ** Validation d'un auteur ** //
function validateAuteur(req: Request, res: Response, next: NextFunction) {
  if (req.body === null) {
    res
      .status(HttpStatusCodes.BAD_REQUEST)
      .send({ error: 'Auteur requis' })
      .end();
    return;
  }

  if (req.body.auteur === null) {
    res
      .status(HttpStatusCodes.BAD_REQUEST)
      .send({ error: 'Auteur requis' })
      .end();
    return;
  }

  const nouvelAuteur = new Auteur(req.body.auteur);
  const error = nouvelAuteur.validateSync();
  if (error !== null && error !== undefined) {
    res.status(HttpStatusCodes.BAD_REQUEST).send(error).end();
  } else {
    next();
  }
}

// Init router
const auteurRouter = Router();

auteurRouter.get(Paths.Auteur.Get, AuteurRoutes.getAll);
auteurRouter.post(Paths.Auteur.Add, validateAuteur, AuteurRoutes.add);
auteurRouter.put(Paths.Auteur.Update, AuteurRoutes.update);
auteurRouter.delete(Paths.Auteur.Delete, AuteurRoutes.delete);

// Add AuteurRouter
apiRouter.use(Paths.Auteur.Base, auteurRouter);

/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
