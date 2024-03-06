import { ICard } from '../card.interfaces';

interface Props<T extends ICard> {
  card: T;
}

export const Image = <T extends ICard>({ card }: Props<T>) => <img alt={card.title} src={card.image} width={380} />;
