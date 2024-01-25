import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

 @Input() title : String = ""
 @Input() data:any[] =[]
 @Output() selectedValue =  new EventEmitter()
  constructor(){}

  NgOnint(){}

  DetectChanges(event:any){
    this.selectedValue.emit(event)
  }
}
