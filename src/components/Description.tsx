import { ICard } from '../card.interfaces';

interface Props {
  card: ICard;
}

export const Description = ({ card }: Props) => (
  <>
    <p>{card.subtitle}</p>
    <p style={{ color: 'yellowgreen' }}>{card.size}</p>
  </>
);
