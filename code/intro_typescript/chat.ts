/**
 * Représente un chat
 * @property {string} nom - Le nom du chat
 * @property {number} nombreDeVies - Le nombre de vies restantes au chat
 * @property {string[]} surnoms - Tableau de tous les surnoms du chat
 * @property {string=} race - Race du chat
 */
type Chat = {
  nom: string;
  nombreDeVies: number;
  surnoms: string[];
  race?: string;
};

/**
 * Affiche le détail d'un chat
 *
 * @param {Chat} unchat - Un chat à afficher
 **/
function afficherChat(unchat: Chat): void {
  console.log(
    `Le chat se nomme ${unchat.nom} et a ${unchat.nombreDeVies} vies.`
  );
}

const fanta: Chat = {
  nom: 'Fanta',
  nombreDeVies: 9,
  surnoms: ['Chaton', 'Tannant'],
};

const guizmo: Chat = {
  nom: 'Guizmo',
  nombreDeVies: 3,
  surnoms: ['Mou'],
  race: 'Siamois',
};

afficherChat(fanta);
afficherChat(guizmo);
