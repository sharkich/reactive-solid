import { FC } from 'react';

import { IArt } from '../card.interfaces';

interface Props {
  card: IArt;
}

export const ArtDescription: FC<Props> = ({ card }) => (
  <>
    <p>{card.subtitle}</p>
    <p style={{ color: 'yellowgreen' }}>{card.size}</p>
    <p style={{ color: 'red' }}>{card.author}</p>
  </>
);
