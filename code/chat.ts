type Chat = {
  nom: string;
  nombreDeVies: number;
  surnoms: string[];
  race?: string;
};

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
