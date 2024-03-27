import React, { FC } from 'react';

import { ArtCard, Card } from './Card/Card';
import { ArtDescription } from './Card/components/ArtDescription';

export const App: FC = () => (
  <div className="App">
    <main className="cards">
      <Card />
      <ArtCard
        renderDescriptionComponent={({ size, subtitle, author }) => (
          <ArtDescription author={author} size={size} subtitle={subtitle} />
        )}
      />
    </main>
  </div>
);
