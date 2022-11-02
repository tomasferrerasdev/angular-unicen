import { Component, OnInit } from '@angular/core';
import { IPipes } from './pipes';
import { PipeCartService } from '../../pipe-cart.service';

@Component({
  selector: 'app-pipe-list',
  templateUrl: './pipe-list.component.html',
  styleUrls: ['./pipe-list.component.scss'],
})
export class PipeListComponent implements OnInit {
  pipes: IPipes[] = [
    {
      title: 'autograph extraordinaire',
      bend: 'straight',
      price: 1557,
      stock: 3,
      image: '/assets/img/savinelli-autograph.jpg',
      quantity: 0,
    },
    {
      title: 'autograph Sandblasted',
      bend: 'bent',
      price: 1557.72,
      stock: 9,
      image: '/assets/img/savinelli-autograph1.jpg',
      quantity: 0,
    },
    {
      title: 'autograph gr.8',
      bend: 'bent',
      price: 684.99,
      stock: 0,
      image: '/assets/img/savinelli-autograph2.jpg',
      quantity: 0,
    },
    {
      title: 'artisan 37',
      bend: 'straight',
      price: 245,
      stock: 15,
      image: '/assets/img/savinelli-artisan.jpg',
      quantity: 0,
    },
    {
      title: 'st.nicholas 2022',
      bend: 'bent',
      price: 99.18,
      stock: 9,
      image: '/assets/img/st-nicholas.jpg',
      quantity: 0,
    },
    {
      title: 'arlecchino 111 ks',
      bend: 'straight',
      price: 180.3,
      stock: 4,
      image: '/assets/img/arlecchino.jpg',
      quantity: 0,
    },
  ];

  constructor(private cart: PipeCartService) {}

  ngOnInit(): void {}

  addToCart(pipe: IPipes): void {
    if (!pipe.quantity) return;
    this.cart.addToCart(pipe);
    pipe.stock -= pipe.quantity;
    pipe.quantity = 0;
  }
  maxReached(m: string) {
    console.log(m);
  }
}
