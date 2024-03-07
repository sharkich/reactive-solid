import React, { FC } from 'react';

import { ArtCardDescription } from './ArtCardDescription';
import { CardTemplate } from './Card';
import { IArt, ICard, isArt } from './card.interfaces';

interface Props {
  card: ICard | IArt;
}

export const DynamicCard: FC<Props> = ({ card }) => {
  if (isArt(card)) {
    return (
      <CardTemplate
        card={card}
        renderCardDescriptionComponent={({ subtitle, size, author }) => (
          <ArtCardDescription author={author} size={size} subtitle={subtitle} />
        )}
      />
    );
  }

  return <CardTemplate card={card} />;
};
