import supertest, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';

import insertUrlParams from 'inserturlparams';

import app from '@src/server';

import Animal, { IAnimal } from '@src/models/Animal';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { ANIMAL_NOT_FOUND_ERR } from '@src/services/AnimalService';

import apiCb from 'spec/support/apiCb';
import { TApiCb } from 'spec/types/misc';

const mockify = require('@jazim/mock-mongoose');

// Données bidon pour les tests
const obtenirDonneesBidonAnimaux = () => {
  return [
    {
      nom: 'Gordan Freeman',
      age: 10,
      type: 'Chat',
      proprietaire: 'Jean-Luc Picard',
      telephone: '514-123-4567',
      _id: '66b0dff443bfceb8069a60e7',
    },
    {
      nom: 'Fanta Le Magnifique',
      age: 11,
      type: 'Chat',
      proprietaire: 'Elliott Alderson',
      telephone: '819-363-4567',
      _id: '66b0dff443bfceb8069a60e8',
    },
    {
      nom: 'Olive La Galante',
      age: 3,
      type: 'Chat',
      proprietaire: 'Jenny Curran',
      telephone: '819-344-2232',
      _id: '66b0dff443bfceb8069a60e9',
    },
  ];
};

// Tests
describe('AnimalRouter', () => {
  let agent: TestAgent<Test>;

  // Ce code est exécuté avant tous les tests, pour préparer l'agent SuperTest
  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  // Get all de Animaux
  describe(`"GET:${'/animaux/'}"`, () => {
    // Initialise l'API
    const api = (cb: TApiCb) => agent.get('/animaux/').end(apiCb(cb));

    // Réussite
    it(
      'doit retourner un objet JSON avec tous les animaux et un code de status de ' +
        `"${HttpStatusCodes.OK}" si la requête est réussie.`,
      (done) => {
        // Préparer le simulacre de Mongoose
        const data = obtenirDonneesBidonAnimaux();
        mockify(Animal).toReturn(data, 'find');

        // Appel de l'API
        api((res) => {
          expect(res.status).toBe(HttpStatusCodes.OK);
          expect(res.body).toEqual({ animaux: data });
          const animaux = res.body.animaux as IAnimal[];
          expect(animaux.length).toBe(data.length);
          done();
        });
      }
    );
  });

  // Test l'ajout d'un animal
  describe(`"POST:/animaux/"`, () => {
    const ERROR_MSG = `Animal requis`,
      DUMMY_Animal = obtenirDonneesBidonAnimaux()[0];

    // Initialise l'API
    const callApi = (animal: IAnimal | null, cb: TApiCb) =>
      agent.post('/animaux/').send({ animal }).end(apiCb(cb));

    // Test un ajout réussi
    it(
      `doit retourner un code de statut "${HttpStatusCodes.CREATED}" si la ` +
        'requête est réussie.',
      (done) => {
        // Préparer le simulacre de Mongoose
        mockify(Animal).toReturn(DUMMY_Animal, 'save');

        // Appel de l'API
        callApi(DUMMY_Animal, (res) => {
          expect(res.status).toBe(HttpStatusCodes.CREATED);
          done();
        });
      }
    );

    // Test avec un animal manquant
    it(
      `doit retourner un objet JSON avec un message d'erreur de "Animal requis" ` +
        `et un code de statut "${HttpStatusCodes.BAD_REQUEST}" si le paramètre animal ` +
        'est manquant.',
      (done) => {
        // Appel de l'API
        callApi(null, (res) => {
          expect(res.status).toBe(HttpStatusCodes.BAD_REQUEST);
          expect(res.body.error).toBe(ERROR_MSG);
          done();
        });
      }
    );

    // Test avec un animal sans nom
    it(
      `doit retourner un objet JSON avec un message d'erreur de "Animal requis" ` +
        `et un code de statut "${HttpStatusCodes.BAD_REQUEST}" si le paramètre animal ` +
        'est manquant.',
      (done) => {
        // Appel de l'API
        const animal = { ...DUMMY_Animal, nom: '' };
        const animalError = {
          nom: {
            name: 'ValidatorError',
            message: 'Le nom est obligatoire',
            properties: {
              message: 'Le nom est obligatoire',
              type: 'required',
              path: 'nom',
              value: '',
            },
            kind: 'required',
            path: 'nom',
            value: '',
          },
        };

        callApi(animal, (res) => {
          expect(res.status).toBe(HttpStatusCodes.BAD_REQUEST);
          const errors = res.body.errors;
          expect(errors).toEqual(animalError);
          done();
        });
      }
    );
  });

  // Mise à jour d'un animal
  describe(`"PUT:/animaux/"`, () => {
    const ERROR_MSG = `Animal requis`,
      DUMMY_Animal = obtenirDonneesBidonAnimaux()[0];

    // Configuration de l'API
    const callApi = (animal: IAnimal | null, cb: TApiCb) =>
      agent.put('/animaux/').send({ animal }).end(apiCb(cb));

    // Réussite
    it(
      `doit retourner un code de statut "${HttpStatusCodes.OK}" si la ` +
        'requête est réussie.',
      (done) => {
        // Préparer le simulacre de Mongoose
        mockify(Animal)
          .toReturn(DUMMY_Animal, 'findOne')
          .toReturn(DUMMY_Animal, 'save');

        // Appel de l'API
        callApi(DUMMY_Animal, (res) => {
          expect(res.status).toBe(HttpStatusCodes.OK);
          done();
        });
      }
    );

    // Paramètre manquant
    it(
      `doit retourner un objet JSON avec un message d'erreur de "${ERROR_MSG}" ` +
        `et un code de statut "${HttpStatusCodes.BAD_REQUEST}" si le paramètre ` +
        'Animal est manquant.',
      (done) => {
        // Appeler l'API
        callApi(null, (res) => {
          expect(res.status).toBe(HttpStatusCodes.BAD_REQUEST);
          expect(res.body.error).toBe(ERROR_MSG);
          done();
        });
      }
    );

    // Animal non trouvé
    it(
      'doit retourner un objet JSON avec le message d\'erreur "' +
        `${ANIMAL_NOT_FOUND_ERR}" et un code de statut ` +
        `"${HttpStatusCodes.NOT_FOUND}" si l'identifiant n'a pas été trouvé.`,
      (done) => {
        // Préparer le simulacre de Mongoose
        mockify(Animal).toReturn(null, 'findOne');
        // Appeler l'API
        callApi(DUMMY_Animal, (res) => {
          expect(res.status).toBe(HttpStatusCodes.NOT_FOUND);
          expect(res.body.error).toBe(ANIMAL_NOT_FOUND_ERR);
          done();
        });
      }
    );
  });

  // Supprimer un animal
  describe(`"DELETE:/animaux/}"`, () => {
    const DUMMY_Animal = obtenirDonneesBidonAnimaux()[0];
    // Appeler l'API
    const callApi = (id: string, cb: TApiCb) =>
      agent.delete(insertUrlParams('/animaux/:id', { id })).end(apiCb(cb));

    // Succès
    it(
      `doit retourner un code de statut "${HttpStatusCodes.OK}" si la ` +
        'requête est réussie.',
      (done) => {
        // Préparer le simulacre de Mongoose
        mockify(Animal)
          .toReturn(DUMMY_Animal, 'findOne')
          .toReturn(DUMMY_Animal, 'findOneAndRemove');

        // Appeler l'API
        callApi(DUMMY_Animal._id, (res) => {
          expect(res.status).toBe(HttpStatusCodes.OK);
          done();
        });
      }
    );

    // Animal non trouvé
    it(
      'doit retourner un objet JSON avec le message d\'erreur "' +
        `${ANIMAL_NOT_FOUND_ERR}" et un code de statut ` +
        `"${HttpStatusCodes.NOT_FOUND}" si l'identifiant n'a pas été trouvé.`,
      (done) => {
        // Préparer le simulacre de Mongoose
        mockify(Animal).toReturn(null, 'findOne');

        // Appeler l'API
        callApi('aaa', (res) => {
          expect(res.status).toBe(HttpStatusCodes.NOT_FOUND);
          expect(res.body.error).toBe(ANIMAL_NOT_FOUND_ERR);
          done();
        });
      }
    );
  });
});
