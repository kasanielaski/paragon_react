export type ProductT = {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
};

export type ResponseT = {
  products: ProductT[];
  total: number;
  skip: number;
  limit: number;
};
