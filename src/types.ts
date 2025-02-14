export type ProductT = {
  id: string;
  title: string;
  price: number;
};

export type ResponseT = {
  products: ProductT[];
  total: number;
  skip: number;
  limit: number;
};
