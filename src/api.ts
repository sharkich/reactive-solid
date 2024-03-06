import { IArt, ICard } from './card.interfaces';

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

export const getArt = async () =>
  await new Promise<IArt>(resolve => {
    setTimeout(() => {
      resolve({
        author: 'Salvador Dali',
        id: '2',
        image: 'https://parabolicabytva.files.wordpress.com/2012/06/rhe-for-blog1.jpg',
        size: '43 x 33',
        subtitle:
          'This was during his “Nuclear Mysticism” period, during which his paintings were influenced by the atomic age, science, and religion.',
        title: 'Raphaelesque Head Exploding'
      });
    }, 1000);
  });
