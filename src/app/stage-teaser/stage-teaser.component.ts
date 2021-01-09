import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../Products/product.service';

@Component({
  selector: 'app-stage-teaser',
  templateUrl: './stage-teaser.component.html',
  styleUrls: ['./stage-teaser.component.css']
})
export class StageTeaserComponent implements OnInit,OnDestroy {
  sub:Subscription;
  stageImgUrl:string;
  stageText:string;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub= this.productService.currentProductType.subscribe(productResponse=>{
      this.stageImgUrl=productResponse.image;
      this.stageText=productResponse.type;

    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
