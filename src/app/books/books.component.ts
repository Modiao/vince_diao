import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private BooksService: BooksService) {
  }

  books: Book [] = []

  isShowing: boolean = true;
  ngOnInit(): void {
    this.books = this.BooksService.getBooks();
  }



}
