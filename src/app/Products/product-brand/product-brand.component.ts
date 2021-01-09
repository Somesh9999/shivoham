import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { productType } from '../productType.model';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {

  productType:productType;

  sub= new Subscription();

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    console.log("init")
    this.productService.currentProductType.subscribe((productTypeResponse)=>{
      this.productType=productTypeResponse;
    });
  }

}
