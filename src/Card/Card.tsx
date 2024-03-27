import { FC } from 'react';

import { Description } from './components/Description';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { useCard } from '../useCard';

export const Card: FC = () => {
  const { card } = useCard();

  return (
    <div>
      {!card && <p>Loading...</p>}
      {card && (
        <div className="card">
          <Header card={card} />
          <Image card={card} />
          <Description card={card} />
        </div>
      )}
    </div>
  );
};
