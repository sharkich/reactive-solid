import { FC } from 'react';

import { ICard } from '../card.interfaces';

interface Props {
  card: ICard;
}

export const Header: FC<Props> = ({ card }) => <h1 style={{ fontSize: 24 }}>{card.title}</h1>;
