import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jeff Super Cool Page';
  rootName = 'Jeffrey';
  rootItems = ['Apples', 'Bananas', 'Cherries'];
  onNameChanged(newName) {
    this.rootName = newName;
  }


}
