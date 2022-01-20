import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { bookObj } from 'src/app/bookObj';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() bookItem!: bookObj;
  @Input() i!: number;
  @Output() deleteBook: EventEmitter<bookObj> = new EventEmitter;
  @Output() doneBook: EventEmitter<bookObj> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(book:bookObj) {
    this.deleteBook.emit(book);
  }

  onCheck(book:bookObj) {
    this.doneBook.emit(book);
  }
}
