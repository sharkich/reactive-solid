import { FC, ReactNode } from 'react';

import { ICard } from './card.interfaces';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { Loading } from './components/Loading';

interface CardTemplateProps<T extends ICard> {
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
}: CardTemplateProps<T>) => (
  <div className="card">
    {renderHeaderComponent(card)}
    {renderImageComponent(card)}
    {renderDescriptionComponent(card)}
  </div>
);

interface Props<T extends ICard> {
  useCardHook: () => { card: T | null };
  renderCardTemplate?: (card: T) => ReactNode;
  LoadingComponent?: FC;
}

export const SelfLoadingCard = <T extends ICard>({
  useCardHook,
  renderCardTemplate = card => <CardTemplate card={card} />,
  LoadingComponent = Loading
}: Props<T>) => {
  const { card } = useCardHook();

  if (!card) {
    return <LoadingComponent />;
  }

  return renderCardTemplate(card);
};
