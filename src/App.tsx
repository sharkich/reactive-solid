import React, { FC } from 'react';

import './App.css';
import { Products } from './products/Products';

export const App: FC = () => (
  <div className="App">
    <main>
      <Products />
    </main>
  </div>
);
