import { NgModule } from '@angular/core';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule     
  ]
})
export class ProductsModule { }