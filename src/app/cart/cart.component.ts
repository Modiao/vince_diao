import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCart() {
    return this.cartService.get();
  }

  removeBook(event: Event) {
    console.log(event.target);
      // let elementId: number = Number((event.target as Element).id);
      // console.log(elementId);
      // return this.cartService.delete();
    }

}
