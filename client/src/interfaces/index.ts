// product / products
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
// products
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

// product
export interface IProductState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  product: IProduct | null;
}

interface IProductActionPayload {
  product?: IProduct;
  errorMessage?: string;
}

export interface IProductAction {
  type: string;
  payload: IProductActionPayload;
}
