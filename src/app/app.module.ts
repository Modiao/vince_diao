import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BooksService } from "./books/books.service";
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations : [AppComponent, CartComponent],
  imports: [BrowserModule, FormsModule, BooksModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})

export class AppModule {}
