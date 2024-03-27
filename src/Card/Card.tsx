import { FC, ReactNode } from 'react';

import { ICard } from './card.interfaces';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { Loading } from './components/Loading';
import { useArt } from './useArt';
import { useCard } from './useCard';

interface Props<T extends ICard> {
  renderHeaderComponent?: (card: T) => ReactNode;
  renderImageComponent?: (card: T) => ReactNode;
  renderDescriptionComponent?: (card: T) => ReactNode;
  LoadingComponent?: FC;
}

const getCard =
  <T extends ICard>(useCardHook: () => { card: T | null }) =>
  ({
    renderHeaderComponent = ({ title }) => <Header title={title} />,
    renderImageComponent = ({ title, image }) => <Image image={image} title={title} />,
    renderDescriptionComponent = ({ subtitle, size }) => <Description size={size} subtitle={subtitle} />,
    LoadingComponent = Loading
  }: Props<T>) => {
    const { card } = useCardHook();

    return (
      <div>
        {!card && <LoadingComponent />}
        {card && (
          <div className="card">
            {renderHeaderComponent(card)}
            {renderImageComponent(card)}
            {renderDescriptionComponent(card)}
          </div>
        )}
      </div>
    );
  };

export const Card = getCard(useCard);
export const ArtCard = getCard(useArt);
