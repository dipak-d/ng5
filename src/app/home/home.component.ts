import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Car } from '../domain/car';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  items = [];
  cars: Car[];
  colorName:string = 'Yellow';
  btnText = 'Add an item';
  itemValue = 'First Item';
  constructor( private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.items = res);
    this.itemCount = this.items.length;
    this._data.changeGoal(this.items);
    this._data.getCarDetails().then(cars => this.cars = cars);
  }

  addItem() {
    this.items.push(this.itemValue);
    this._data.changeGoal(this.items);
    this.itemValue = '';
    this.itemCount = this.items.length;
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this._data.changeGoal(this.items);
    this.itemCount = this.items.length;
  }
}
