import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number;
  items = [];
  btnText : string = 'Add an item';
  itemValue: string = 'First Item';
  constructor() { }

  ngOnInit() {
    this.itemCount = this.items.length;
  }

  addItem(){
    this.items.push(this.itemValue);
    this.itemValue='';
    this.itemCount= this.items.length;
  }
}
