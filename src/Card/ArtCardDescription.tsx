import { IArt } from './card.interfaces';
import { CardDescription, CardDescriptionProps } from './CardDescription';

export type ArtCardDescriptionProps = CardDescriptionProps & Pick<IArt, 'author'>;

export const ArtCardDescription = ({ author, ...props }: ArtCardDescriptionProps) => (
  <>
    <CardDescription {...props} />
    <p style={{ color: 'red' }}>{author}</p>
  </>
);
