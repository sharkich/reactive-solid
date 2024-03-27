import { FC } from 'react';

import { ICard } from '../card.interfaces';

export type ImageProps = Pick<ICard, 'title' | 'image'>;

export const Image: FC<ImageProps> = ({ title, image }) => <img alt={title} src={image} width={380} />;
