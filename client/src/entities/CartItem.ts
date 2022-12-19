import {IProduct} from '../interfaces';

export class CartItemEntity {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;

  constructor(product: IProduct) {
    this._id = product._id;
    this.name = product.name;
    this.price = product.price;
    this.quantity = 1;
    this.imageUrl = product.imageUrl;
  }
}
