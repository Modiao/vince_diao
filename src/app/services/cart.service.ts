import { Injectable, Input } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = [];

  constructor() { }

  get(){
    return this.cart;
  }

  add(book: Book){
    const allIds = this.cart.map(objet => objet.id)
    if(allIds.includes(book.id)){
     this.cart.forEach(item =>{
      if(item.id == book.id){
        item.quantity = item.quantity + 1;
      }
     })
      console.log(this.cart);
      console.log('Book exist in the cart')
    }
    else{
      book.quantity =  book.quantity + 1
      this.cart.push(book);
      
    }
  }

  delete(book: Book) {
    this.cart.forEach(item =>{
      if(item.id == book.id){
        if (item.quantity == 1){
          this.cart = this.cart.filter(objet => objet.id != book.id )
        }
        else{
          item.quantity = item.quantity - 1;
        }

      }
     })
    }
    // console.log(book);
    // console.log(this.cart.filter(item => item.id != book.id));
  }
