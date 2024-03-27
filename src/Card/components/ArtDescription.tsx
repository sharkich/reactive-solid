import { FC } from 'react';

import { Description } from './Description';
import { IArt } from '../card.interfaces';

interface Props {
  card: IArt;
}

export const ArtDescription: FC<Props> = ({ card }) => (
  <>
    <Description card={card} />
    <p style={{ color: 'red' }}>{card.author}</p>
  </>
);
