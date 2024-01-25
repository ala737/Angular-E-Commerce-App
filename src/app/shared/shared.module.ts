import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';



@NgModule({
  declarations: [
    HeaderComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
  ]

})
export class SharedModule { }
