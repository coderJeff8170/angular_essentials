import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name"/>
    <h1>Hello {{ name }}</h1>
    <p>I'm the user component</p>
  `,
})
export class UserComponent {
  name = 'Jeff';

  onUserInput(event) {
    this.name = event.target.value;
  }
}
