export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
}

export interface ProductsProps {}

export interface ProductDetailsProps {
  id: string;
}
