import { ReactNode } from 'react';

import { ICard } from './card.interfaces';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Image } from './components/Image';

interface Props<T extends ICard> {
  card: T;
  renderHeaderComponent?: (card: T) => ReactNode;
  renderImageComponent?: (card: T) => ReactNode;
  renderDescriptionComponent?: (card: T) => ReactNode;
}

export const CardTemplate = <T extends ICard>({
  card,
  renderHeaderComponent = ({ title }) => <Header title={title} />,
  renderImageComponent = ({ title, image }) => <Image image={image} title={title} />,
  renderDescriptionComponent = ({ subtitle, size }) => <Description size={size} subtitle={subtitle} />
}: Props<T>) => (
  <div className="card">
    {renderHeaderComponent(card)}
    {renderImageComponent(card)}
    {renderDescriptionComponent(card)}
  </div>
);
