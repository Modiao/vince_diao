import { Injectable } from '@angular/core';

export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        id: 1,
        name: "Clean Code",
        author: "Robert C Martin",
        src: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
        amount: 400,
        quantity: 0
      },
      {
        id: 2,
        name: "Clean Architecture",
        author: "Modou diao",
        src: "https://m.media-amazon.com/images/I/41-sN-mzwKL._SX381_BO1,204,203,200_.jpg",
        amount: 600,
        quantity: 0
      },
      {
        id: 3,
        name: "Donald E. Knuth",
        author: "The Art of Computer Programming",
        src: "https://m.media-amazon.com/images/I/41RlsiG0lHL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
        amount: 700,
        quantity: 0
      },
      {
        id: 4,
        name: "Maurice Herlihy",
        author: "The Art of Multiprocessor Programming",
        src: "https://m.media-amazon.com/images/I/51UYMkAO40L.jpg",
        amount: 800,
        quantity: 0
      }
    ]
  }
}
