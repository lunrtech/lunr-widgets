import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'ng-world-clock',
  templateUrl: './world-clock.component.html',
  styleUrls: ['./world-clock.component.css']
})
export class WorldClockComponent {

  now: any;

  constructor() {    
    setInterval(() => {
      this.now = moment().format('hh:mm:ss');
    }, 1000);
  }
}