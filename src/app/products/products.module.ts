import { NgModule } from '@angular/core';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SelectComponent } from '../shared/components/select/select.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    SpinnerComponent,
    SelectComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductsModule { }
