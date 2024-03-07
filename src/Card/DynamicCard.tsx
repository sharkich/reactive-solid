import { FC } from 'react';

import { ArtDescription } from './ArtDescription';
import { CardTemplate } from './Card';
import { IArt, ICard, isArt } from './card.interfaces';

interface Props {
  card: ICard | IArt;
}

export const DynamicCard: FC<Props> = ({ card }) =>
  isArt(card) ? (
    <CardTemplate
      card={card}
      renderCardDescriptionComponent={({ author, size, subtitle }) => (
        <ArtDescription author={author} size={size} subtitle={subtitle} />
      )}
    />
  ) : (
    <CardTemplate card={card} />
  );
