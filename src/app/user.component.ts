import { Component, EventEmitter, Input, Output } from '@angular/core';

//(input)="onUserInput($event)" [name]="name"
@Component({
  selector: 'app-user',
  template: `
    <!-- <input type="text" [(ngModel)]="name"/> -->
    <input type="text" (input)="onUserInput($event)" [value]="name">

    <h1>Hello {{ name }}</h1>
    <p>I'm the user component</p>
    <app-user-detail></app-user-detail>
  `,
})
export class UserComponent {
  @Input() name = 'Jeff';
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
