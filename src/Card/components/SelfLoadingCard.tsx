import { FC, ReactNode } from 'react';

import { Loading } from './Loading';
import { ICard } from '../card.interfaces';
import { CardTemplate } from '../CardTemplate';

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
