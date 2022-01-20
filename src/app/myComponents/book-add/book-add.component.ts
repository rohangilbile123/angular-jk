import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { bookObj } from 'src/app/bookObj';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  title!: string;
  name!: string;
  @Output() addBook: EventEmitter<bookObj> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const book = {
      title: this.title,
      author: this.name,
      active: false,
    }
    this.addBook.emit(book);
  }

}
