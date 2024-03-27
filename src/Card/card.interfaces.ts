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
