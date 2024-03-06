import { FC } from 'react';

import { ICard } from '../card.interfaces';

interface Props {
  card: ICard;
}

export const Image: FC<Props> = ({ card }) => <img alt={card.title} src={card.image} width={380} />;
