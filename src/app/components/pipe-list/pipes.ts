export interface IPipes {
  title: string;
  bend: IBend;
  price: number;
  stock: number;
  image: string;
  quantity: number;
}

export type IBend = 'bent' | 'straight';
