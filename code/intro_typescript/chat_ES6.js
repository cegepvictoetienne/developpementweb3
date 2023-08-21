/**
 * Affiche le détail d'un chat
 *
 * @param {Chat} unchat - Un chat à afficher
 **/
function afficherChat(unchat) {
    console.log("Le chat se nomme ".concat(unchat.nom, " et a ").concat(unchat.nombreDeVies, " vies."));
}
var fanta = {
    nom: 'Fanta',
    nombreDeVies: 9,
    surnoms: ['Chaton', 'Tannant'],
};
var guizmo = {
    nom: 'Guizmo',
    nombreDeVies: 3,
    surnoms: ['Mou'],
    race: 'Siamois',
};
afficherChat(fanta);
afficherChat(guizmo);
