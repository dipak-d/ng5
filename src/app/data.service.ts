import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { Car } from './domain/car';
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['first item', 'second item', 'third item']);
  // private cars = new
  goal = this.goals.asObservable();

  constructor(private http: HttpClient) { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

  getCarDetails() {
    return this.http.get<any>('assets/data/cars-small.json')
          .toPromise()
          .then(res => <Car[]> res.data)
          .then(data => data);
  }
}
