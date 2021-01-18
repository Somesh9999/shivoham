import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './Contact/contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { ProductBrandComponent } from './Products/product-brand/product-brand.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"product-brand",component:ProductBrandComponent},
  { path:"contact-form", component:ContactFormComponent},
  { path:"dashboard", component:DashboardComponent},
  { path:"about", component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
