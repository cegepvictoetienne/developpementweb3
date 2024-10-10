export interface IPersonnageData {
  nom: string;
  photo: string;
  adresse: string;
}

export const PersonnageData: IPersonnageData[] = [
  {
    nom: 'Fluffy McChat',
    photo: '/fanta.png',
    adresse: '123 Ave Des Félins',
  },
  {
    nom: 'Whiskey McLovin',
    photo: '/whiskey.png',
    adresse: '444 de le Bête',
  },
];
