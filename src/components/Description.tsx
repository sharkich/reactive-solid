import { FC } from 'react';

import { ICard } from '../card.interfaces';

interface Props {
  card: ICard;
}

export const Description: FC<Props> = ({ card }) => (
  <>
    <p>{card.subtitle}</p>
    <p style={{ color: 'yellowgreen' }}>{card.size}</p>
  </>
);
