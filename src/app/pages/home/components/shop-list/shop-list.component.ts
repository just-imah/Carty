import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public productList: any;
  
  watches: any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.getWatch()

  }
  getWatch() {
    this.api.get().subscribe(data => {
      this.watches = data; 
      console.log(this.watches);
      
    })
  }
}




  // this.productList = Array(6).fill(
    //   {
    //     name: 'ima,',
    //     price: '200',
    //     desc: 'mmlorem ipsum',
    //     image: '/assets/cart.jpg'
    //   }
    // )

    // this.productList = [
      
    //    {
    //     name: 'ima,',
    //     price: '200',
    //     desc: 'mmlorem ipsum',
    //     image: '/assets/cart.jpg',

    //   },
    //    {
    //     name: 'shoe,',
    //     price: '200',
    //     desc: 'mmlorem ipsum',
    //     image: '/assets/cart.jpg',

    //   }
    // ]