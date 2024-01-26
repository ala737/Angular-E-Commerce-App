import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

 @Input() products:any = {}
 @Output() product = new EventEmitter()

 add(){
  this.product.emit(this.products)
 }

}
