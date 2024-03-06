import React, { FC } from 'react';

import { ArtCard, Card } from './Card';
import { ArtDescription } from './components/ArtDescription';

export const App: FC = () => (
  <div className="App">
    <main className="cards">
      <Card />
      <ArtCard DescriptionComponent={ArtDescription} />
    </main>
  </div>
);
