export interface Product {
    image: string;
    name: string;
    description: string;
    rating: {rate: number, count: number};
    price:number;
    kaspiUrl: string;
  }