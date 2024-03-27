import React, { FC, useEffect, useState } from 'react';

import { getArt, getCard } from './api';
import { CardTemplate, SelfLoadingCard } from './Card/Card';
import { IArt, ICard } from './Card/card.interfaces';
import { AnyCardTemplate } from './Card/components/AnyCardTemplate';
import { ArtDescription } from './Card/components/ArtDescription';
import { Loading } from './Card/components/Loading';
import { useArt } from './Card/useArt';
import { useCard } from './Card/useCard';

export const App: FC = () => {
  const [batchCards, setBatchCards] = useState<Array<ICard | IArt>>([]);

  useEffect(() => {
    const fetchCards = async () => {
      setBatchCards(await Promise.all([await getCard(), await getCard(), await getArt(), await getArt()]));
    };
    void fetchCards();
  }, []);

  return (
    <div className="App">
      <main className="cards">
        <SelfLoadingCard useCardHook={useCard} />
        <SelfLoadingCard
          renderCardTemplate={card => (
            <CardTemplate
              card={card}
              renderDescriptionComponent={({ size, subtitle, author }) => (
                <ArtDescription author={author} size={size} subtitle={subtitle} />
              )}
            />
          )}
          useCardHook={useArt}
        />
      </main>

      <div className="cards">
        {!batchCards.length && <Loading />}
        {batchCards.map(card => (
          <AnyCardTemplate key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
