import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StageTeaserComponent } from './stage-teaser/stage-teaser.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './Products/product-type/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductBrandComponent } from './Products/product-brand/product-brand.component';
import { ProductBrandListComponent } from './Products/product-brand-list/product-brand-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Module import
import {AngularMaterialModule} from './angular-material.module';

import { ContactFormComponent } from './Contact/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AdminLoginComponent } from './Dashboard/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StageTeaserComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    ProductBrandComponent,
    ProductBrandListComponent,
    ContactFormComponent,
    DashboardComponent,
    AdminLoginComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
