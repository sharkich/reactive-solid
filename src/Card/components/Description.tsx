import { ICard } from '../card.interfaces';

interface Props<T extends ICard> {
  card: T;
}

export const Description = <T extends ICard>({ card }: Props<T>) => (
  <>
    <p>{card.subtitle}</p>
    <p style={{ color: 'yellowgreen' }}>{card.size}</p>
  </>
);
