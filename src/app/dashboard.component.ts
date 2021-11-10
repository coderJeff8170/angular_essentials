import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>My Dashboard</h1>
    <!-- <input type="text" (input)="loadState = $event.target.value"> -->
    <!-- <input type="text" [(ngModel)]="loadState"> -->
    <input type="text" (input)="onUserInput($event)" [value]="myText">
    <!-- <p>{{loadState}}</p> -->
    <p [textContent]="loadState"></p>
    <hr>
    <button (click)="onClick()">Click Me</button>
  `
})
export class DashboardComponent {
  @Input() myText = 'change loading text here'
  loadState = 'loading';

  onClick(){
    this.loadState = 'finished';
  }

  onUserInput(e){
    this.loadState = e.target.value;
  }
}
