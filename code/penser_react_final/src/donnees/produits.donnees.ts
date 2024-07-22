import { Produit } from '../models/Produit.model';

const PRODUITS: Produit[] = [
  { categorie: 'Fruits', prix: '$1', en_inventaire: true, nom: 'Pomme' },
  { categorie: 'Fruits', prix: '$1', en_inventaire: true, nom: 'Orange' },
  {
    categorie: 'Fruits',
    prix: '$2',
    en_inventaire: false,
    nom: 'Banane',
  },
  { categorie: 'Légumes', prix: '$2', en_inventaire: true, nom: 'Épinard' },
  { categorie: 'Légumes', prix: '$4', en_inventaire: false, nom: 'Kale' },
  { categorie: 'Légumes', prix: '$1', en_inventaire: true, nom: 'Courge' },
];

export default PRODUITS;
