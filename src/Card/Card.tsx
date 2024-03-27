import { FC } from 'react';

import { ICard } from './card.interfaces';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { Loading } from './components/Loading';
import { useArt } from './useArt';
import { useCard } from './useCard';

interface Props<T extends ICard> {
  HeaderComponent?: FC<{ card: T }>;
  ImageComponent?: FC<{ card: T }>;
  DescriptionComponent?: FC<{ card: T }>;
  LoadingComponent?: FC;
}

const getCard =
  <T extends ICard>(useCardHook: () => { card: T | null }) =>
  ({
    HeaderComponent = Header,
    ImageComponent = Image,
    DescriptionComponent = Description,
    LoadingComponent = Loading
  }: Props<T>) => {
    const { card } = useCardHook();

    return (
      <div>
        {!card && <LoadingComponent />}
        {card && (
          <div className="card">
            <HeaderComponent card={card} />
            <ImageComponent card={card} />
            <DescriptionComponent card={card} />
          </div>
        )}
      </div>
    );
  };

export const Card = getCard(useCard);
export const ArtCard = getCard(useArt);
