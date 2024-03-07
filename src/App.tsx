import React, { FC, useEffect, useState } from 'react';

import { getArt, getCard } from './api';
import { ArtDescription } from './Card/ArtDescription';
import { CardTemplate, SelfLoadingCard } from './Card/Card';
import { IArt, ICard } from './Card/card.interfaces';
import { DynamicCard } from './Card/DynamicCard';
import { useArt } from './Card/useArt';
import { useCard } from './Card/useCard';

export const App: FC = () => {
  const [cards, setCards] = useState<Array<ICard | IArt>>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const card = await getCard();
      const art = await getArt();
      setCards([card, art]);
    };
    void fetchCards();
  }, []);

  return (
    <div className="App">
      <div className="cards">
        <SelfLoadingCard getCardHook={useCard} />
        <SelfLoadingCard
          getCardHook={useArt}
          renderCardTemplate={card => (
            <CardTemplate
              card={card}
              renderCardDescriptionComponent={({ author, subtitle, size }) => (
                <ArtDescription author={author} size={size} subtitle={subtitle} />
              )}
            />
          )}
        />
      </div>

      <main className="cards">
        {cards.map(card => (
          <DynamicCard key={card.id} card={card} />
        ))}
      </main>
    </div>
  );
};
