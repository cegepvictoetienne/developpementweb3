import insertUrlParams from 'inserturlparams';
import { customDeepCompare } from 'jet-validators/utils';

import ReservationRepo from '@src/repos/ReservationRepo';
import Reservation from '@src/models/Reservation';
import { RESERVATION_NOT_FOUND_ERR } from '@src/services/ReservationService';

import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import { ValidationError } from '@src/common/util/route-errors';

import Paths from './common/Paths';
import { parseValidationErr, TRes } from './common/util';
import { agent } from './support/setup';
import { IReservation, TypeChambre } from '@src/models/Reservation';

/******************************************************************************
                               Constants
******************************************************************************/

// Données bidon pour les réservations (simulacre de GET)
const DB_RESERVATIONS = [
  Reservation.new({
    nom: 'Jim Halpert',
    courriel: 'jimh@dundermifflin.com',
    dateDebut: new Date('2026-01-01'),
    dateFin: new Date('2026-01-04'),
    typeChambre: TypeChambre.Standard,
    prixParNuit: 123,
  }),
  Reservation.new({
    nom: 'Michael Scott',
    courriel: 'michaels@dundermifflin.com',
    dateDebut: new Date('2026-02-12'),
    dateFin: new Date('2026-03-16'),
    typeChambre: TypeChambre.Deluxe,
    prixParNuit: 150,
  }),
  Reservation.new({
    nom: 'Dwight Schrute',
    courriel: 'dwights@dundermifflin.com',
    dateDebut: new Date('2026-02-12'),
    dateFin: new Date('2026-03-12'),
    typeChambre: TypeChambre.Deluxe,
    prixParNuit: 150,
  }),
] as const;

// Don't compare 'id' and 'created' cause those are set dynamically by the
// database
const compareUserArrays = customDeepCompare({
  onlyCompareProps: ['nom', 'courriel', 'typeChambre', 'prixParNuit'],
});

/******************************************************************************
                                 Tests
  IMPORTANT: Following TypeScript best practices, we test all scenarios that 
  can be triggered by a user under normal circumstances. Not all theoretically
  scenarios (i.e. a failed database connection). 
******************************************************************************/

describe('reservationRouter', () => {
  let dbReservations: IReservation[] = [];

  // S'exécute avant chaque test
  beforeEach(async () => {
    await ReservationRepo.deleteAllReservations();
    dbReservations = await ReservationRepo.insertMult(DB_RESERVATIONS);
  });

  // Extraire toutes les réservations
  describe(`'GET:${Paths.Reservations.Get}'`, () => {
    // Succès
    it(
      'doit retourner un JSON avec toutes les réservations et un code de ' +
        `of '${HttpStatusCodes.OK}' si réussi.`,
      async () => {
        const res: TRes<{ reservations: IReservation[] }> = await agent.get(
          Paths.Reservations.Get,
        );
        expect(res.status).toBe(HttpStatusCodes.OK);
        expect(
          compareUserArrays(res.body.reservations, DB_RESERVATIONS),
        ).toBeTruthy();
      },
    );
  });

  // Tester l'ajout d'une réservation
  describe(`'POST:${Paths.Reservations.Add}'`, () => {
    // Ajout réussi
    it(
      `doit retourner le code '${HttpStatusCodes.CREATED}' si la ` +
        'transaction est réussie',
      async () => {
        const reservation = Reservation.new({
            nom: 'Toby',
            courriel: 'hr@dundermifflin.com',
            dateDebut: new Date('2026-01-01'),
            dateFin: new Date('2026-01-04'),
            typeChambre: TypeChambre.Standard,
            prixParNuit: 110,
          }),
          res = await agent.post(Paths.Reservations.Add).send({ reservation });
        expect(res.status).toBe(HttpStatusCodes.CREATED);
      },
    );

    // Paramètre manquant
    it(
      'doit retourner un JSON avec les erreurs et un code de ' +
        `'${HttpStatusCodes.BAD_REQUEST}' si un paramètre est ` +
        'manquant.',
      async () => {
        const res: TRes = await agent
          .post(Paths.Reservations.Add)
          .send({ reservation: null });
        expect(res.status).toBe(HttpStatusCodes.BAD_REQUEST);
        const errorObj = parseValidationErr(res.body.error);
        expect(errorObj.message).toBe(ValidationError.MESSAGE);
        expect(errorObj.errors[0].prop).toBe('reservation');
      },
    );
  });

  // Mise à jour d'une réservation
  describe(`'PUT:${Paths.Reservations.Update}'`, () => {
    // Succès
    it(
      `doit retourner un code de '${HttpStatusCodes.OK}' si la mise à jour ` +
        'est réussie.',
      async () => {
        const reservation = DB_RESERVATIONS[0];
        reservation.nom = 'Johnny B. Good';
        const res = await agent
          .put(Paths.Reservations.Update)
          .send({ reservation });
        expect(res.status).toBe(HttpStatusCodes.OK);
      },
    );

    // Réservation non trouvée
    it(
      'doit retourner un JSON avec erreur  ' +
        `'${RESERVATION_NOT_FOUND_ERR}' et un code de ` +
        `'${HttpStatusCodes.NOT_FOUND}' si l'id n'est pas trouvé.`,
      async () => {
        const reservation = Reservation.new({
            id: 4,
            nom: 'a',
            courriel: 'a@a.com',
          }),
          res: TRes = await agent
            .put(Paths.Reservations.Update)
            .send({ reservation });
        expect(res.status).toBe(HttpStatusCodes.NOT_FOUND);
        expect(res.body.error).toBe(RESERVATION_NOT_FOUND_ERR);
      },
    );
  });

  // Supprimer la réservation
  describe(`'DELETE:${Paths.Reservations.Delete}'`, () => {
    const getPath = (id: number) =>
      insertUrlParams(Paths.Reservations.Delete, { id });

    // Succès
    it(
      `doit retourner un code de '${HttpStatusCodes.OK}' si la ` +
        'suppression est réussie.',
      async () => {
        const id = dbReservations[0].id,
          res = await agent.delete(getPath(id));
        expect(res.status).toBe(HttpStatusCodes.OK);
      },
    );

    // Réservation non trouvée
    it(
      'doit retourner un JSON avec erreur ' +
        `'${RESERVATION_NOT_FOUND_ERR}' et un code de  ` +
        `'${HttpStatusCodes.NOT_FOUND}' si la réservation est introuvable.`,
      async () => {
        const res: TRes = await agent.delete(getPath(-1));
        expect(res.status).toBe(HttpStatusCodes.NOT_FOUND);
        expect(res.body.error).toBe(RESERVATION_NOT_FOUND_ERR);
      },
    );
  });
});
