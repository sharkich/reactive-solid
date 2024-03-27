import { ICard } from '../card.interfaces';

interface Props {
  card: ICard;
}

export const Image = ({ card }: Props) => <img alt={card.title} src={card.image} width={380} />;
