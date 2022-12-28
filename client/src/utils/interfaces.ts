export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
}

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  totalCost: number;
  imageUrl: string;
}
