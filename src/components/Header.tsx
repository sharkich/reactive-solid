import { ICard } from '../card.interfaces';

interface Props {
  card: ICard;
}

export const Header = ({ card }: Props) => <h1 style={{ fontSize: 24 }}>{card.title}</h1>;
