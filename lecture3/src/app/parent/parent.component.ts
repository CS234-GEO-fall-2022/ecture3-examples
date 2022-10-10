import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book-model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  booktitle: string;

  bookList: Book[];

  testBook: Book;

  constructor() {
    this.booktitle = "Title";

    this.testBook = {title: "Test Titile", author: "Test author", pages: 100}
    
    this.bookList = [
      {title: "title1", author: "author1", pages: 100},
      {title: "title2", author: "author2", pages: 200},
      {title: "title2", author: "author2", pages: 200},
    ]
   }

  ngOnInit(): void {
  }

  click2(event){
    console.log(event);
  }

  onAddBook(book){
    this.bookList.push(book);
  }
}
