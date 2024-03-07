import { ICard } from './card.interfaces';

export type CardHeaderProps = Pick<ICard, 'title'>;

export const CardHeader = ({ title }: CardHeaderProps) => <h1 style={{ fontSize: 24 }}>{title}</h1>;
