import { ICard } from './card.interfaces';

export const getCard = async () =>
  await new Promise<ICard>(resolve => {
    setTimeout(() => {
      resolve({
        id: '1',
        image: 'https://i.ebayimg.com/images/g/JFcAAOSwsuVlvUQO/s-l1600.jpg',
        size: '50 x 70',
        subtitle: 'Posters are made from high-quality paper 200 gsm using an ecological printing process.',
        title: 'Dune part 2 (2024) Movie Poster'
      });
    }, 1000);
  });
