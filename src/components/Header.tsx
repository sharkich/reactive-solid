import { ICard } from '../card.interfaces';

export type HeaderProps = Pick<ICard, 'title'>;

export const Header = ({ title }: HeaderProps) => <h1 style={{ fontSize: 24 }}>{title}</h1>;
