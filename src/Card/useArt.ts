import { useEffect, useState } from 'react';

import { IArt } from './card.interfaces';
import { getArt } from '../api';

export const useArt = () => {
  const [card, setCard] = useState<IArt | null>(null);

  useEffect(() => {
    getArt().then(setCard);
  }, []);

  return { card };
};
