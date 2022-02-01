import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './components/carts/carts.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/home/components/products/products.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartsComponent},
  { path: 'aboutpage', component: AboutpageComponent },
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
