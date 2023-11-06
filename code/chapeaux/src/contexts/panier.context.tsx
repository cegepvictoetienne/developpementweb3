import React, { useState } from 'react';

interface IItemPanier {
  id: number;
  nom: string;
  photo: string;
  prix: number;
  quantite: number;
}

export type PanierContextType = {
  itemsPanier: IItemPanier[];
  panierOuvert: boolean;
  setItemsPanier: (itemsPanier: IItemPanier[]) => void;
  setPanierOuvert: (ouvert: boolean) => void;
};

const panierVide: IItemPanier[] = [];

export const PanierContext = React.createContext<PanierContextType>({
  itemsPanier: panierVide,
  panierOuvert: false,
  setItemsPanier: () => {},
  setPanierOuvert: () => {},
});

export default function PanierProvider(props: any) {
  const [itemsPanier, setItemsPanier] = useState(panierVide);
  const [panierOuvert, setPanierOuvert] = useState(false);

  const values = {
    itemsPanier,
    panierOuvert,
    setItemsPanier,
    setPanierOuvert,
  };
  return (
    <PanierContext.Provider value={values}>
      {props.children}
    </PanierContext.Provider>
  );
}
