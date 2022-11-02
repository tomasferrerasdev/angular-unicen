import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPipes } from '../pipe-list/pipes';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss'],
})
export class InputIntegerComponent implements OnInit {
  constructor() {}

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  upQuanity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('Se alcanzo el max');
    }
  }
  downQuanity(): void {
    if (this.quantity === 0) return;
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  onChangeQuantity(event: any, pipe: IPipes) {}
}
