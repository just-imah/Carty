import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ShopListComponent } from 'src/app/pages/home/components/shop-list/shop-list.component';
import { ProductsComponent } from 'src/app/pages/home/components/products/products.component';


@NgModule({
  declarations: [ 
    HomeComponent, ProductsComponent, ShopListComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
