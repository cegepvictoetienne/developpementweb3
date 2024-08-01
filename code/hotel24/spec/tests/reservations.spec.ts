import supertest, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';
import { defaultErrMsg as ValidatorErr } from 'jet-validator';
import insertUrlParams from 'inserturlparams';

import app from '@src/server';

import ReservationRepo from '@src/repos/ReservationRepo';
import Reservation, {
  IReservation,
  TypeChambre,
} from '@src/models/Reservation';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { RESERVATION_NOT_FOUND_ERR } from '@src/services/ReservationService';

import Paths from 'spec/support/Paths';
import apiCb from 'spec/support/apiCb'; // Fonction de rappel pour les tests API, utilisé comme patch pour les dates
import { TApiCb } from 'spec/types/misc';

// Réservations bidon pour la requête GET
const genererReservationsBidon = () => {
  return [
    Reservation.new(
      'Jim Halpert',
      'jimh@dundermifflin.com',
      '2025-02-01',
      '2025-02-02',
      TypeChambre.Deluxe,
      125,
      12
    ),
    Reservation.new(
      'Michael Scott',
      'michaels@dundermifflin.com',
      '2025-03-12',
      '2025-03-16',
      TypeChambre.Standard,
      100,
      13
    ),
    Reservation.new(
      'Dwight Schrute',
      'dwights@dundermifflin.com',
      '2025-02-01',
      '2025-02-02',
      TypeChambre.Deluxe,
      125,
      14
    ),
  ];
};

// Tests
describe('ReservationRouter', () => {
  let agent: TestAgent<Test>;

  // Doit rouler avant tous les tests
  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  // Récupérer toutes les réservations
  describe(`"GET:${Paths.Reservations.Get}"`, () => {
    // Configuration de l'API
    const api = (cb: TApiCb) =>
      agent.get(Paths.Reservations.Get).end(apiCb(cb));

    // Succès
    it(
      'doit retourner un objet JSON avec toutes les réservations et un code de statut ' +
        `de "${HttpStatusCodes.OK}" si la requête est réussie.`,
      (done) => {
        // SpyOn est utilisé pour simuler la récupération des données, dans ce cas,
        // les réservations bidon sont retournées lorsque notre route appelle getAll.
        const data = genererReservationsBidon();
        spyOn(ReservationRepo, 'getAll').and.resolveTo(data);
        // Appel de l'API
        api((res) => {
          expect(res.status).toBe(HttpStatusCodes.OK);
          expect(res.body).toEqual({ reservations: data });
          done();
        });
      }
    );
  });

  // Test d'ajout d'une réservation
  describe(`"POST:${Paths.Reservations.Add}"`, () => {
    const ERROR_MSG = `${ValidatorErr}"reservation".`,
      RESERVATION_BIDON = genererReservationsBidon()[0];

    // Préparation de l'API
    const callApi = (reservation: IReservation | null, cb: TApiCb) =>
      agent.post(Paths.Reservations.Add).send({ reservation }).end(apiCb(cb));

    // Test de succès de l'ajout d'une réservation
    it(
      `doit retourner un code de statut "${HttpStatusCodes.CREATED}" si la ` +
        'requête est réussie.',
      (done) => {
        // SpyOn est utilisé pour simuler la récupération des données, dans ce cas,
        // la fonction add ne retourne rien.
        spyOn(ReservationRepo, 'add').and.resolveTo();
        // Appel de l'API
        callApi(RESERVATION_BIDON, (res) => {
          expect(res.status).toBe(HttpStatusCodes.CREATED);
          done();
        });
      }
    );

    // Paramètre manquant
    it(
      `doit retourner un objet JSON avec un message d'erreur "${ERROR_MSG}" ` +
        `et un code de statut "${HttpStatusCodes.BAD_REQUEST}" si le paramètre ` +
        'réservation est manquant.',
      (done) => {
        // Appel de l'API sans paramètre
        callApi(null, (res) => {
          expect(res.status).toBe(HttpStatusCodes.BAD_REQUEST);
          expect(res.body.error).toBe(ERROR_MSG);
          done();
        });
      }
    );
  });

  // Mise à jour d'une réservation
  describe(`"PUT:${Paths.Reservations.Update}"`, () => {
    const ERROR_MSG = `${ValidatorErr}"reservation".`,
      RESERVATION_BIDON = genererReservationsBidon()[0];

    // Préparation de l'API
    const callApi = (reservation: IReservation | null, cb: TApiCb) =>
      agent.put(Paths.Reservations.Update).send({ reservation }).end(apiCb(cb));

    // Succès
    it(
      `doit retourner un code de statut "${HttpStatusCodes.OK}" si la ` +
        'requête est réussie.',
      (done) => {
        // SpyOn est utilisé pour simuler la récupération des données, dans ce cas,
        // la fonction update ne retourne rien mais la fonction persists retourne true.
        spyOn(ReservationRepo, 'update').and.resolveTo();
        spyOn(ReservationRepo, 'persists').and.resolveTo(true);
        // Appel de l'API
        callApi(RESERVATION_BIDON, (res) => {
          expect(res.status).toBe(HttpStatusCodes.OK);
          done();
        });
      }
    );

    // Paramètre manquant
    it(
      `doit retourner un objet JSON avec un message d'erreur "${ERROR_MSG}" ` +
        `et un code de statut "${HttpStatusCodes.BAD_REQUEST}" si le paramètre ` +
        'réservation est manquant.',
      (done) => {
        // Appel de l'API sans paramètre
        callApi(null, (res) => {
          expect(res.status).toBe(HttpStatusCodes.BAD_REQUEST);
          expect(res.body.error).toBe(ERROR_MSG);
          done();
        });
      }
    );

    // Réservation non trouvée
    it(
      'doit retourner un objet JSON avec le message d\'erreur "' +
        `${RESERVATION_NOT_FOUND_ERR}" et un code de statut ` +
        `"${HttpStatusCodes.NOT_FOUND}" si l'identifiant n'a pas été trouvé.`,
      (done) => {
        // Appel de l'API
        callApi(RESERVATION_BIDON, (res) => {
          expect(res.status).toBe(HttpStatusCodes.NOT_FOUND);
          expect(res.body.error).toBe(RESERVATION_NOT_FOUND_ERR);
          done();
        });
      }
    );
  });

  // Supprimer une réservation
  describe(`"DELETE:${Paths.Reservations.Delete}"`, () => {
    // Appel de l'API
    const callApi = (id: number, cb: TApiCb) =>
      agent
        .delete(insertUrlParams(Paths.Reservations.Delete, { id }))
        .end(apiCb(cb));

    // Succès
    it(
      `doit retourner un code de statut "${HttpStatusCodes.OK}" si la ` +
        'requête est réussie.',
      (done) => {
        // Configuration des spies
        spyOn(ReservationRepo, 'delete').and.resolveTo();
        spyOn(ReservationRepo, 'persists').and.resolveTo(true);
        // Appel de l'API
        callApi(5, (res) => {
          expect(res.status).toBe(HttpStatusCodes.OK);
          done();
        });
      }
    );

    // Réservation non trouvée
    it(
      'doit retourner un objet JSON avec le message d\'erreur "' +
        `${RESERVATION_NOT_FOUND_ERR}" et un code de statut ` +
        `"${HttpStatusCodes.NOT_FOUND}" si l'identifiant n'a pas été trouvé.`,
      (done) => {
        // Configuration des spies
        callApi(-1, (res) => {
          expect(res.status).toBe(HttpStatusCodes.NOT_FOUND);
          expect(res.body.error).toBe(RESERVATION_NOT_FOUND_ERR);
          done();
        });
      }
    );
  });
});
