import { ICard } from '../card.interfaces';

export type ImageProps = Pick<ICard, 'title' | 'image'>;

export const Image = ({ title, image }: ImageProps) => <img alt={title} src={image} width={380} />;
