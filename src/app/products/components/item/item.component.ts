import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

 @Input() products:any = {}
 @Output() product = new EventEmitter()

 addButton:boolean = false
 amount:number = 0
 add(){
  this.product.emit({product : this.products,quantity:this.amount})
 }

}
