import { useEffect, useState } from 'react';

import { ICard } from './card.interfaces';
import { getCard } from '../api';

export const useCard = () => {
  const [card, setCard] = useState<ICard | null>(null);

  useEffect(() => {
    getCard().then(setCard);
  }, []);

  return {
    card
  };
};
