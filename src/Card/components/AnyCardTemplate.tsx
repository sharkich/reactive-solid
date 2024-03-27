import { FC } from 'react';

import { ArtDescription } from './ArtDescription';
import { IArt, ICard, isArt } from '../card.interfaces';
import { CardTemplate } from '../CardTemplate';

interface Props {
  card: ICard | IArt;
}

export const AnyCardTemplate: FC<Props> = ({ card }) =>
  isArt(card) ? (
    <CardTemplate
      card={card}
      renderDescriptionComponent={({ author, size, subtitle }) => (
        <ArtDescription author={author} size={size} subtitle={subtitle} />
      )}
    />
  ) : (
    <CardTemplate card={card} />
  );
