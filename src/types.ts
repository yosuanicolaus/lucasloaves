export type Product = {
  name: string;
  price: number;
  description: string;
};

export type Job = {
  name: string;
  description: string;
};

export type Order = {
  id: number;
  products: Product[];
  totalPrice: number;
};
