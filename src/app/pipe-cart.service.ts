import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPipes } from './components/pipe-list/pipes';

@Injectable({
  providedIn: 'root',
})
export class PipeCartService {
  private _cartList: IPipes[] = [];
  cartList: BehaviorSubject<IPipes[]> = new BehaviorSubject(this._cartList);

  constructor() {}

  addToCart(pipe: IPipes) {
    let item: IPipes | undefined = this._cartList.find(
      (v1) => v1.title === pipe.title
    );

    item ? (item.quantity += pipe.quantity) : this._cartList.push({ ...pipe });

    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
