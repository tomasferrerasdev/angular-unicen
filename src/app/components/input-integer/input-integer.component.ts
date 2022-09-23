import { Component, Input, OnInit } from '@angular/core';
import { IPipes } from '../pipe-list/pipes';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss'],
})
export class InputIntegerComponent implements OnInit {
  constructor() {}

  @Input()
  pipe!: IPipes;

  ngOnInit(): void {}

  upQuanity(pipe: IPipes): void {
    if (pipe.quantity === pipe.stock) return;
    pipe.quantity++;
  }
  downQuanity(pipe: IPipes): void {
    if (pipe.quantity === 0) return;
    pipe.quantity--;
  }

  onChangeQuantity(event: any, pipe: IPipes) {}
}
