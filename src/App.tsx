import React, { FC, useEffect, useState } from 'react';

import { getArt, getCard } from './api';
import { ArtCardDescription } from './Card/ArtCardDescription';
import { CardTemplate, SelfLoadingCard } from './Card/Card';
import { IArt, ICard } from './Card/card.interfaces';
import { DynamicCard } from './Card/DynamicCard';
import { useArt } from './Card/useArt';
import { useCard } from './Card/useCard';

export const App: FC = () => {
  const [cards, setCards] = useState<Array<ICard | IArt>>([]);

  useEffect(() => {
    const fetch = async () => {
      setCards(await Promise.all([await getCard(), await getArt()]));
    };
    void fetch();
  }, []);

  return (
    <div className="App">
      <div className="cards">
        <SelfLoadingCard getUseCard={useCard} />
        <SelfLoadingCard
          getUseCard={useArt}
          renderCardTemplate={card => (
            <CardTemplate
              card={card}
              renderCardDescriptionComponent={({ subtitle, size, author }) => (
                <ArtCardDescription author={author} size={size} subtitle={subtitle} />
              )}
            />
          )}
        />
      </div>

      <div className="cards">
        {cards.map(card => (
          <DynamicCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
