import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { stageInfo } from 'src/app/stage-teaser/stageInfo.model';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit,OnDestroy {

  stageInfo:stageInfo;


  sub= new Subscription();

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub= this.activatedRoute.queryParamMap.subscribe(queryData=>{
      this.stageInfo={
        stageText:queryData.get('stageText'),
        stageImage:queryData.get('stageImage')
      };
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
