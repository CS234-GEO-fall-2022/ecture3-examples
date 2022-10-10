import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  isActive: boolean;
  classes: {[key: string]: boolean};
  styles: {[key: string]: string};

  book: Book;
  
  booList: Book[];

  constructor() { 
    this.isActive = false;
    this.book = {title: "title1", author: "author1", pages: 100};

    this.booList = [
      {title: "title1", author: "author1", pages: 100},
      {title: "title2", author: "author2", pages: 200},
      {title: "title2", author: "author2", pages: 200},
    ]

    this.classes = {
      'active': this.isActive,
      'inactive': !this.isActive
    }

    this.styles = {
      'color': this.isActive ? 'green' : 'red',
      'font-size': this.isActive ? '100px': '50px'
    }
  }

  ngOnInit(): void {
  }

}

// interface Book{
//   title: string;
//   author: string;
//   pages: number;
// }
