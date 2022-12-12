import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private cartService:CartService ) { }

  @Input() book: Book = {} as Book;

  ngOnInit(): void {
  }

  addToCart() {

    this.cartService.add(this.book);
    }

}
