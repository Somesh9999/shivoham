import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { productType } from '../productType.model';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit,OnDestroy {

  productType:productType;


  sub= new Subscription();

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub= this.activatedRoute.queryParamMap.subscribe(queryData=>{
      this.productType={
        type:queryData.get('type'),
        image:queryData.get('image')
      };
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
