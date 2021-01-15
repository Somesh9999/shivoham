import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { productType } from '../productType.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product_types:productType[]=[];
  sub=new Subscription();

  //Pagination
  totalPosts= 1;
  pageSize= 3;
  pageSizeOptions=[3,6,9];
  currentPage=1;

  constructor(private router:Router, private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProductType(this.pageSize,this.currentPage);
    this.sub=this.productService.getProductTypeSubject().subscribe((productData=>{
      this.product_types=productData.productType;
      this.totalPosts=productData.productCount;
      console.log(this.product_types);
    }))
  }

  product_type_clicked(event:Event){
    var html = event.target as HTMLElement;
    var image= html.nextElementSibling.getAttribute('src');
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "stageText": html.id.toString(),
        "stageImage":image.toString()
      }
    };
    this.router.navigate(["/product-brand"],navigationExtras);
  }

  onPageChanged(pageData: PageEvent){
    this.currentPage= pageData.pageIndex +1;
    this.pageSize= pageData.pageSize;
    this.productService.getProductType(this.pageSize,this.currentPage);
  }

}
