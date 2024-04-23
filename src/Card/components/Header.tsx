import { ICard } from '../card.interfaces';

interface Props<T extends ICard> {
  card: T;
}

export const Header = <T extends ICard>({ card }: Props<T>) => <h1 style={{ fontSize: 24 }}>{card.title}</h1>;
