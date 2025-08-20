import { Router } from 'express';

import Paths from '@src/common/constants/Paths';
import ReservationRoutes from './ReservationRoutes';


/******************************************************************************
                                Setup
******************************************************************************/

const apiRouter = Router();


// ** Ajouter les routes de réservation ** //

// Initialiser le router
const reservationRoutes = Router();

// Les routes
reservationRoutes.get(Paths.Reservations.Get, ReservationRoutes.getAll);
reservationRoutes.post(Paths.Reservations.Add, ReservationRoutes.add);
reservationRoutes.put(Paths.Reservations.Update, ReservationRoutes.update);
reservationRoutes.delete(Paths.Reservations.Delete, ReservationRoutes.delete);

// Ajouter le router à l'API
apiRouter.use(Paths.Reservations.Base, reservationRoutes);


/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
