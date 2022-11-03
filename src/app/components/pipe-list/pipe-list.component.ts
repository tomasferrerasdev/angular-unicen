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
      image:
        'https://www.savinelli.it/media/catalog/product/cache/c56afb36d3e034f12fd9001accb20888/P/F/PF155LMC-6-0045_1.jpg',
      quantity: 0,
    },
    {
      title: 'autograph Sandblasted',
      bend: 'bent',
      price: 1557.72,
      stock: 9,
      image:
        'https://www.savinelli.it/media/catalog/product/cache/e58d290970859d0f111b56f2a5dc6ac7/P/F/PF100SMS-6-0003_1.jpg',
      quantity: 0,
    },
    {
      title: 'autograph gr.8',
      bend: 'bent',
      price: 684.99,
      stock: 0,
      image:
        'https://www.savinelli.it/media/catalog/product/cache/e58d290970859d0f111b56f2a5dc6ac7/P/F/PF100SNG-6-0002_1.jpg',
      quantity: 0,
    },
    {
      title: 'artisan 37',
      bend: 'straight',
      price: 245,
      stock: 15,
      image:
        'https://www.savinelli.it/media/catalog/product/cache/e58d290970859d0f111b56f2a5dc6ac7/P/1/P139ZN-6-003_1.jpg',
      quantity: 0,
    },
    {
      title: 'st.nicholas 2022',
      bend: 'bent',
      price: 99.18,
      stock: 9,
      image:
        'https://www.savinelli.it/media/catalog/product/cache/e58d290970859d0f111b56f2a5dc6ac7/P/1/P139ZM-6-001_1.jpg',
      quantity: 0,
    },
    {
      title: 'arlecchino 111 ks',
      bend: 'straight',
      price: 180.3,
      stock: 4,
      image:
        'https://www.savinelli.it/media/catalog/product/cache/e58d290970859d0f111b56f2a5dc6ac7/P/4/P406ZNR-6_1.jpg',
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
