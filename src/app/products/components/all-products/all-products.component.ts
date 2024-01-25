import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  products:any[] = [];

  constructor (private service:ProductsService){ }

  ngOnInit():void{
    this.getProducts()
  }

  getProducts(){
    return this.service.getAllProducts().subscribe((res:any) =>{
       this.products = res;
    }, error => {
      console.log(error.message)
    })
  }

}
