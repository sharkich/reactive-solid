import React, { FC } from 'react';

import { Card } from './Card';

export const App: FC = () => (
  <div className="App">
    <main className="cards">
      <Card />
      <Card />
    </main>
  </div>
);
