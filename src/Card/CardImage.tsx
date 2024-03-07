import { ICard } from './card.interfaces';

export type CardImageProps = Pick<ICard, 'title' | 'image'>;

export const CardImage = ({ title, image }: CardImageProps) => <img alt={title} src={image} width={380} />;
