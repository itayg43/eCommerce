import {v4 as uuidv4} from 'uuid';

import {Product} from './interfaces';

export class CartItem {
  id: string;
  pId: string;
  pName: string;
  pPrice: number;
  pQuantity: number;
  pImageUrl: string;

  constructor(product: Product, quantity: number) {
    this.id = uuidv4();
    this.pId = product.id;
    this.pName = product.name;
    this.pPrice = product.price;
    this.pQuantity = quantity;
    this.pImageUrl = product.imageUrl;
  }

  getTotalPrice() {
    return this.pQuantity * this.pPrice;
  }
}
