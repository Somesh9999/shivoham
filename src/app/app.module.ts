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

//Anggular Material Imports
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ContactDialogComponent } from './Contact/contact-dialog/contact-dialog.component';




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
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
