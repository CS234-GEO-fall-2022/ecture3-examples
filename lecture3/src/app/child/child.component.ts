import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book-model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() bookTitle: string;
  @Output() newClick = new EventEmitter<string>;


  @Input() book: Book;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("onClick");
    this.newClick.emit("Test");
  }
}
