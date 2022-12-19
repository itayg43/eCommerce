// product
// model
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
}

// screens
export interface IProductsScreenProps {}

export interface IProductDetailsScreenProps {
  id: string;
}

// redux
export interface IProductsState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  products: [IProduct] | [];
}

interface IProductsActionPayload {
  products?: [IProduct];
  errorMessage?: string;
}

export interface IProductsAction {
  type: string;
  payload: IProductsActionPayload;
}
