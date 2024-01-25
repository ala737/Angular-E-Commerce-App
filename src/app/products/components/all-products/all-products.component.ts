import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  products:any[] = [];
  categories:any[] =[];
  constructor (private service:ProductsService){ }

  ngOnInit():void{
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    return this.service.getAllProducts().subscribe((res:any) =>{
       this.products = res;
    }, error => {
      alert(error)
    })
  }



  getCategories(){
    return this.service.getcategoriesService().subscribe((res:any) => {
       this.categories = res;
    }, error => {
      alert(error)
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    console.log(value);
    (value == "All")? this.getProducts() : this.getProductsCategory(value)
  }

  getProductsCategory(keyword:String){
    
      this.products  = this.products
    
    this.service.getProductsByCategory(keyword).subscribe((res:any) =>{
      this.products = res
    })
  
}
}
