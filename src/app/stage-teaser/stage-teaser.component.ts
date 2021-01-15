import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../Products/product.service';
import { productType } from '../Products/productType.model';
import { stageInfo } from './stageInfo.model';

@Component({
  selector: 'app-stage-teaser',
  templateUrl: './stage-teaser.component.html',
  styleUrls: ['./stage-teaser.component.css']
})
export class StageTeaserComponent implements OnInit,OnDestroy {

  constructor(private productService: ProductService) { }

  @Input() stageInfo:stageInfo

  ngOnInit(): void {
  }

  ngOnDestroy(){
  }

}
