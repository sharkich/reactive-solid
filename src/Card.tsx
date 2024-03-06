import { FC, useEffect, useState } from 'react';

import { getCard } from './api';
import { ICard } from './card.interfaces';

export const Card: FC = () => {
  const [card, setCard] = useState<ICard | null>(null);

  useEffect(() => {
    getCard().then(setCard);
  }, []);

  return (
    <div>
      {!card && <p>Loading...</p>}
      {card && (
        <div className="card">
          <h1>{card.title}</h1>
          <img alt={card.title} src={card.image} width={380} />
          <p>{card.subtitle}</p>
          <p>{card.size}</p>
        </div>
      )}
    </div>
  );
};
