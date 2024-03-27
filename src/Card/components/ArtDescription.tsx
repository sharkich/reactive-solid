import { FC } from 'react';

import { Description, DescriptionProps } from './Description';
import { IArt } from '../card.interfaces';

type Props = DescriptionProps & Pick<IArt, 'author'>;

export const ArtDescription: FC<Props> = ({ author, ...props }) => (
  <>
    <Description {...props} />
    <p style={{ color: 'red' }}>{author}</p>
  </>
);
