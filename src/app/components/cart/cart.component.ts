import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PipeCartService } from 'src/app/pipe-cart.service';
import { IPipes } from '../pipe-list/pipes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartList$!: Observable<IPipes[]>;

  constructor(private cart: PipeCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {}
}
