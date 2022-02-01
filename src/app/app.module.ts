import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartsComponent } from './components/carts/carts.component';
import { ProductsComponent } from './pages/home/components/products/products.component';
// import httpclientmodule
import { HttpClientModule } from '@angular/common/http';
import { ShopListComponent } from './pages/home/components/shop-list/shop-list.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartsComponent,
    ProductsComponent,
    ShopListComponent,
    HomeComponent,
    AboutpageComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
