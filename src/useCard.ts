import { useEffect, useState } from 'react';

import { getCard } from './api';
import { ICard } from './card.interfaces';

export const useCard = () => {
  const [card, setCard] = useState<ICard | null>(null);

  useEffect(() => {
    getCard().then(setCard);
  }, []);

  return { card };
};
