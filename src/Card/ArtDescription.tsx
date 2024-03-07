import { FC } from 'react';

import { IArt } from './card.interfaces';
import { CardDescription, CardDescriptionProps } from './CardDescription';

type Props = CardDescriptionProps & Pick<IArt, 'author'>;

export const ArtDescription: FC<Props> = ({ author, ...props }) => (
  <>
    <CardDescription {...props} />
    <p style={{ color: 'red' }}>{author}</p>
  </>
);
