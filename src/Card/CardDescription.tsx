import { ICard } from './card.interfaces';

export type CardDescriptionProps = Pick<ICard, 'subtitle' | 'size'>;

export const CardDescription = ({ subtitle, size }: CardDescriptionProps) => (
  <>
    <p>{subtitle}</p>
    <p style={{ color: 'yellowgreen' }}>{size}</p>
  </>
);
