export interface ICard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  size: string;
}

export interface IArt extends ICard {
  author: string;
}

export const isArt = (card: ICard | IArt): card is IArt => (card as IArt).author !== undefined;
