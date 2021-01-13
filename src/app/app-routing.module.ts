import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './Contact/contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { ProductBrandComponent } from './Products/product-brand/product-brand.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"product-brand",component:ProductBrandComponent},
  { path:"contact-form", component:ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
