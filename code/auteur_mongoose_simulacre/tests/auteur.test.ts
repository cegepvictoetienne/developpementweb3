import insertUrlParams from 'inserturlparams';
import { customDeepCompare } from 'jet-validators/utils';

import AuteurRepo from '@src/repos/AuteurRepo';

import { AUTEUR_NON_TROUVE } from '@src/services/AuteurService';

import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import { ValidationError } from '@src/common/util/route-errors';

import Paths from './common/Paths';
import { parseValidationErr, TRes } from './common/util';
import { agent } from './support/setup';
import { IAuteur, Auteur } from '@src/models/Auteur';

/******************************************************************************
                               Constants
******************************************************************************/

// Données bidon pour les auteurs (simulacre de GET)
const DB_AUTEURS: IAuteur[] = [
  {
    id: '1',
    nom: 'Halpert',
    prenom: 'Jim',
  },
  {
    id: '2',
    nom: 'Schrute',
    prenom: 'Dwight',
  },
  {
    id: '3',
    nom: 'Scott',
    prenom: 'Michael',
  },
] as const;

// Don't compare 'id' and 'created' cause those are set dynamically by the
// database
const compareUserArrays = customDeepCompare({
  onlyCompareProps: ['nom', 'courriel', 'typeChambre', 'prixParNuit'],
});

const mockify = require('@jazim/mock-mongoose');
/******************************************************************************
                                 Tests
  IMPORTANT: Following TypeScript best practices, we test all scenarios that 
  can be triggered by a user under normal circumstances. Not all theoretically
  scenarios (i.e. a failed database connection). 
******************************************************************************/

describe('auteurRouter', () => {
  let dbAuteurs: IAuteur[] = [];

  // Extraire tous les auteurs
  describe(`'GET:${Paths.Auteur.Get}'`, () => {
    // Succès
    it(
      'doit retourner un JSON avec tous les auteurs et un code de ' +
        `of '${HttpStatusCodes.OK}' si réussi.`,
      async () => {
        // Préparer le simulacre de Mongoose
        const data = [...DB_AUTEURS];
        mockify(Auteur).toReturn(data, 'find');
        const res: TRes<{ auteurs: IAuteur[] }> = await agent.get(
          Paths.Auteur.Get,
        );
        expect(res.status).toBe(HttpStatusCodes.OK);
        expect(compareUserArrays(res.body.auteurs, DB_AUTEURS)).toBeTruthy();
      },
    );
  });

  // Tester l'ajout d'un auteur
  describe(`'POST:${Paths.Auteur.Add}'`, () => {
    // Ajout réussi
    it(
      `doit retourner le code '${HttpStatusCodes.CREATED}' si la ` +
        'transaction est réussie',
      async () => {
        const auteur: IAuteur = {
          id: '12',
          nom: 'Beasley',
          prenom: 'Pam',
        };
        // Préparer le simulacre de Mongoose
        mockify(Auteur).toReturn(auteur, 'save');
        const res = await agent.post(Paths.Auteur.Add).send({ auteur });
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
          .post(Paths.Auteur.Add)
          .send({ auteur: null });
        expect(res.status).toBe(HttpStatusCodes.BAD_REQUEST);
        expect(res.body.error).toBe('Auteur requis');
      },
    );
  });

  // Mise à jour d'un auteur
  describe(`'PUT:${Paths.Auteur.Update}'`, () => {
    // Succès
    it(
      `doit retourner un code de '${HttpStatusCodes.OK}' si la mise à jour ` +
        'est réussie.',
      async () => {
        const auteur = DB_AUTEURS[0];
        auteur.nom = 'Johnny B. Good';

        // Préparer le simulacre de Mongoose
        mockify(Auteur).toReturn(auteur, 'findOne').toReturn(auteur, 'save');

        const res = await agent.put(Paths.Auteur.Update).send({ auteur });
        expect(res.status).toBe(HttpStatusCodes.OK);
      },
    );

    // Réservation non trouvée
    it(
      'doit retourner un JSON avec erreur  ' +
        `'${AUTEUR_NON_TROUVE}' et un code de ` +
        `'${HttpStatusCodes.NOT_FOUND}' si l'id n'est pas trouvé.`,
      async () => {
        // Préparer le simulacre de Mongoose
        mockify(Auteur).toReturn(null, 'findOne');
        const auteur = {
            id: 4,
            nom: 'a',
            prenom: 'b',
          },
          res: TRes = await agent.put(Paths.Auteur.Update).send({ auteur });

        expect(res.status).toBe(HttpStatusCodes.NOT_FOUND);
        expect(res.body.error).toBe(AUTEUR_NON_TROUVE);
      },
    );
  });

  // Supprimer la réservation
  describe(`'DELETE:${Paths.Auteur.Delete}'`, () => {
    const getPath = (id: string) =>
      insertUrlParams(Paths.Auteur.Delete, { id });

    // Succès
    it(
      `doit retourner un code de '${HttpStatusCodes.OK}' si la ` +
        'suppression est réussie.',
      async () => {
        // Préparer le simulacre de Mongoose
        mockify(Auteur)
          .toReturn(DB_AUTEURS[0], 'findOne')
          .toReturn(DB_AUTEURS[0], 'findOneAndRemove');
        const id = DB_AUTEURS[0].id,
          res = await agent.delete(getPath(id));
        expect(res.status).toBe(HttpStatusCodes.OK);
      },
    );

    // Réservation non trouvée
    it(
      'doit retourner un JSON avec erreur ' +
        `'${AUTEUR_NON_TROUVE}' et un code de  ` +
        `'${HttpStatusCodes.NOT_FOUND}' si la réservation est introuvable.`,
      async () => {
        // Préparer le simulacre de Mongoose
        mockify(Auteur).toReturn(null, 'findOne');

        const res: TRes = await agent.delete(getPath('-1'));
        expect(res.status).toBe(HttpStatusCodes.NOT_FOUND);
        expect(res.body.error).toBe(AUTEUR_NON_TROUVE);
      },
    );
  });
});
