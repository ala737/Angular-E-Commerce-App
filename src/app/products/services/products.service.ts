// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsService {

//   constructor(private http: HttpClient) { }

//   getAllProducts(){
//      return this.http.get('https://fakestoreapi.com/products')
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
 // private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(environment.baseApi +"prod");
  }
}
