import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // creatre property to store productList
  public productList: any;
  constructor(private api : ApiService, private cart : CartService) { }

  ngOnInit(): void {

    // make a call
    // this.api.getProduct()
    // // subscribe the method
    //   .subscribe(res => {
    //     this.productList = res;
    //   })
    
  }
  


}
// make a function outsidemake sure tomcall in your constructor or ngOnInit

