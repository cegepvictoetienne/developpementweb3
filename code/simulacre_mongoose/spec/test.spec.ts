import Fiche, { IFiche } from '../src/fiche';
// __tests__/user.test.js
const mockify = require('@jazim/mock-mongoose');
import mongoose, { Schema, model } from 'mongoose';

describe('Tester le modèle Fiche', () => {
  it('findById doit retourner la fiche', () => {
    const _fiche: IFiche = {
      _id: '507f191e810c19729de860ea',
      nom: 'Ted Mosby',
      courriel: 'ted@mosbius-design.com',
      adresse: '123, rue de la République',
      age: 30,
      telephone: '123-456-7890',
    };

    mockify(Fiche).toReturn(_fiche, 'findOne');

    return Fiche.findById({ _id: '507f191e810c19729de860ea' }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toEqual(_fiche);
    });
  });
});
