import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  @Input() item = "dsdfs";
  @Input() items = [];

  onAddItem(item){
    this.items.push(item);
    console.log(this.items);
  }

  onItemInput(e){
    this.item = e.target.value;
  }

  ngOnInit(): void {
    console.log('it is working');
  }

}
