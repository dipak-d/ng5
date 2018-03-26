import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import { NguiMapComponent } from '@ngui/map';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild(NguiMapComponent)
  itemId: number;
  items: any;
  name = 'Dipak';
  lat:any;
  lng:any;
  
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => this.itemId = res.id);
   }

  ngOnInit() {
    // var mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this._data.goal.subscribe(res => this.items = res);
  }
  sendMeBack() {
    this.router.navigate(['']);
  }

}
