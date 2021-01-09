import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductBrandComponent } from './Products/product-brand/product-brand.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  {path:"product-brand",component:ProductBrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
