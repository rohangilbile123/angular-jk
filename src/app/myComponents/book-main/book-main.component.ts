import { Component, OnInit } from '@angular/core';
import { bookObj } from 'src/app/bookObj';

@Component({
  selector: 'app-book-main',
  templateUrl: './book-main.component.html',
  styleUrls: ['./book-main.component.css']
})
export class BookMainComponent implements OnInit {
  books: bookObj[];
  localItem: any;
  constructor() {
    this.localItem = localStorage.getItem("bookLib");

    // Checking if the data is null, if not, then parsing it
    if (this.localItem == null) {
      this.books = [];
    }
    else {
      this.books = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  addBookFunc(book:bookObj) {
    console.log(book);
    this.books.push(book);
    localStorage.setItem("bookLib", JSON.stringify(this.books));
  }
  deleteBookFunc(book:bookObj) {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
    localStorage.setItem("bookLib", JSON.stringify(this.books));
  }
  readBook(book:bookObj) {
    const index = this.books.indexOf(book);
    this.books[index].active = !this.books[index].active;
    localStorage.setItem("bookLib", JSON.stringify(this.books));
  }
}
