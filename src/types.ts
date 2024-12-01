export type ResponseT = {
  products: {
    id: string;
    title: string;
    price: number;
  }[];
  total: number;
  skip: number;
  limit: number;
};