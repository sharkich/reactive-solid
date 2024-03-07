import { FC, ReactNode } from 'react';

import { ICard } from './card.interfaces';
import { CardDescription } from './CardDescription';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';
import { Loading } from './Loading';

interface CardTemplateProps<T extends ICard> {
  card: T;
  renderCardHeaderComponent?: (card: T) => ReactNode;
  renderCardImageComponent?: (card: T) => ReactNode;
  renderCardDescriptionComponent?: (card: T) => ReactNode;
}

export const CardTemplate = <T extends ICard>({
  card,
  renderCardHeaderComponent = _card => <CardHeader title={card.title} />,
  renderCardImageComponent = _card => <CardImage image={_card.image} title={_card.title} />,
  renderCardDescriptionComponent = _card => <CardDescription size={_card.size} subtitle={_card.subtitle} />
}: CardTemplateProps<T>) => (
  <div className="card">
    {renderCardHeaderComponent(card)}
    {renderCardImageComponent(card)}
    {renderCardDescriptionComponent(card)}
  </div>
);

interface SelfLoadingCardProps<T extends ICard> {
  getCardHook: () => { card: T | null };
  LoadingComponent?: FC;
  renderCardTemplate?: (card: T) => ReactNode;
}

export const SelfLoadingCard = <T extends ICard>({
  getCardHook,
  LoadingComponent = Loading,
  renderCardTemplate = card => <CardTemplate card={card} />
}: SelfLoadingCardProps<T>) => {
  const { card } = getCardHook();

  if (!card) {
    return <LoadingComponent />;
  }

  return renderCardTemplate(card);
};
