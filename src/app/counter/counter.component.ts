import { Component, OnInit } from '@angular/core';

//instead of this:
// import 'lodash';
// declare var _: any;

//install from cli with: npm install --save @types/lodash, then import as whatever function is needed
import { random } from 'lodash';//interestingly, works out of the box in 2021

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 0;

  onIncrement() {
    // this.count++;
    //old lodash
    // this.count = _.random(1, 20);
    //new lodash
    this.count = random(1, 20);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
