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
  loading : boolean = false
  constructor (private service:ProductsService){ }

  ngOnInit():void{
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this.loading = true
    return this.service.getAllProducts().subscribe((res:any) =>{
       this.products = res;
       this.loading = false
    }, error => {
      this.loading = false
      alert(error)
    })
  }



  getCategories(){
    this.loading = true
    return this.service.getcategoriesService().subscribe((res:any) => {
       this.categories = res;
       this.loading = false
    }, error => {
      this.loading = false
      alert(error)
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    console.log(value);
    (value == "All")? this.getProducts() : this.getProductsCategory(value)
  }

  getProductsCategory(keyword:String){
    
    this.loading = true
      this.products  = this.products
    
    this.service.getProductsByCategory(keyword).subscribe((res:any) =>{
      this.loading = false
      this.products = res
    })
  
}
}
