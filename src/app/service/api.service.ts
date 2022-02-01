import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import map operator
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   url:string = ' http://localhost:3000';
  constructor(private http: HttpClient) { }

  // call api using a method
  // getProduct() {
  //   return this.http.get<any>("https://fakestoreapi.com/products")
  //     // pipe using the map operator
  //     .pipe(map((res: any) => {
  //       return res;  
  //   }))
  // }

  get() {
    return this.http.get(`${this.url}/watches`)
  }

}
