import { FC } from 'react';

import { ICard } from '../card.interfaces';

export type HeaderProps = Pick<ICard, 'title'>;

export const Header: FC<HeaderProps> = ({ title }) => <h1 style={{ fontSize: 24 }}>{title}</h1>;
