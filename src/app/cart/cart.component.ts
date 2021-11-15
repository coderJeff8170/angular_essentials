import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  @Input() item = "dsdfs";
  //remember, @Input means this property is settable from outside..
  @Input() items = [];

  onAddItem(item){
    if(this.item){
      this.items.push(item);
      this.item="";
      console.log(this.items);
    }

  }

  onItemInput(e){
    this.item = e.target.value;
  }

  ngOnInit(): void {
    console.log('cart component is working');
  }

}
