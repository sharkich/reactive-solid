import { FC } from 'react';

import { ICard } from './card.interfaces';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Image } from './components/Image';
import { Loading } from './components/Loading';
import { useCard } from './useCard';

interface Props {
  useCardHook?: typeof useCard;
  HeaderComponent?: FC<{ card: ICard }>;
  ImageComponent?: FC<{ card: ICard }>;
  DescriptionComponent?: FC<{ card: ICard }>;
  LoadingComponent?: FC;
}

export const Card: FC<Props> = ({
  useCardHook = useCard,
  HeaderComponent = Header,
  ImageComponent = Image,
  DescriptionComponent = Description,
  LoadingComponent = Loading
}) => {
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
