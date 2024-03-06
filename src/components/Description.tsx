import { ICard } from '../card.interfaces';

export type DescriptionProps = Pick<ICard, 'subtitle' | 'size'>;

export const Description = ({ subtitle, size }: DescriptionProps) => (
  <>
    <p>{subtitle}</p>
    <p style={{ color: 'yellowgreen' }}>{size}</p>
  </>
);
