import React, { FC } from 'react';

import { CardTemplate, SelfLoadingCard } from './Card';
import { ArtDescription } from './components/ArtDescription';
import { useArt } from './useArt';
import { useCard } from './useCard';

export const App: FC = () => (
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
  </div>
);
