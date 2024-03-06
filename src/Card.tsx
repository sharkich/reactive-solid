import { FC, useEffect, useState } from 'react';

import { getCard } from './api';
import { ICard } from './card.interfaces';

export const Card: FC = () => {
  const [card, setCard] = useState<ICard | null>(null);

  useEffect(() => {
    getCard().then(setCard);
  }, []);

  if (!card) {
    return <div style={{ margin: 64, textAlign: 'center', width: 200 }}>Loading...</div>;
  }

  return (
    <div className="card">
      <h1 style={{ fontSize: 24 }}>{card.title}</h1>
      <img alt={card.title} src={card.image} width={380} />
      <p>{card.subtitle}</p>
      <p style={{ color: 'yellowgreen' }}>{card.size}</p>
    </div>
  );
};
