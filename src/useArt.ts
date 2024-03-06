import { useEffect, useState } from 'react';

import { getArt } from './api';
import { IArt } from './card.interfaces';

export const useArt = () => {
  const [card, setCard] = useState<IArt | null>(null);

  useEffect(() => {
    getArt().then(setCard);
  }, []);

  return { card };
};
