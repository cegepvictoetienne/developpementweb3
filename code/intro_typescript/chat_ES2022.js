'use strict';
/**
 * Affiche le détail d'un chat
 *
 * @param {Chat} unchat - Un chat à afficher
 **/
function afficherChat(unchat) {
  console.log(
    `Le chat se nomme ${unchat.nom} et a ${unchat.nombreDeVies} vies.`
  );
}
const fanta = {
  nom: 'Fanta',
  nombreDeVies: 9,
  surnoms: ['Chaton', 'Tannant'],
};
const guizmo = {
  nom: 'Guizmo',
  nombreDeVies: 3,
  surnoms: ['Mou'],
  race: 'Siamois',
};
afficherChat(fanta);
afficherChat(guizmo);
