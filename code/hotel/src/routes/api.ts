import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';
import Reservation from '@src/models/Reservation';
import ReservationRoute from './ReservationRoute';

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// ** Add UserRouter ** //

const reservationRouter = Router();

// Extraire toutes les réservations
reservationRouter.get(Paths.Reservations.Get, ReservationRoute.getAll);

// Ajouter une réservation
reservationRouter.post(
  Paths.Reservations.Add,
  validate(['reservation', Reservation.isReservation]),
  ReservationRoute.add
);

// Mise à jour d'une réservation
reservationRouter.put(
  Paths.Reservations.Update,
  validate(['reservation', Reservation.isReservation]),
  ReservationRoute.update
);

// Supprimer une réservation
reservationRouter.delete(
  Paths.Reservations.Delete,
  validate(['id', 'number', 'params']),
  ReservationRoute.delete
);

// Ajouter le router à l'API
apiRouter.use(Paths.Reservations.Base, reservationRouter);

// **** Export default **** //

export default apiRouter;
