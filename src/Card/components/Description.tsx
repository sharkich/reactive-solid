import { FC } from 'react';

import { ICard } from '../card.interfaces';

export type DescriptionProps = Pick<ICard, 'subtitle' | 'size'>;

export const Description: FC<DescriptionProps> = ({ subtitle, size }) => (
  <>
    <p>{subtitle}</p>
    <p style={{ color: 'yellowgreen' }}>{size}</p>
  </>
);
