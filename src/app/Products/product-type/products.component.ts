import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product_types=[
    {name:"Hard-Disk",image:"../../assets/artist-banner.jpg"},
    {name:"Graphic Card",image:"../../assets/artist-banner.jpg"},
    {name:"RAM",image:"../../assets/artist-banner.jpg"},
    {name:"Mother Board",image:"../../assets/artist-banner.jpg"},
    {name:"Monitor",image:"../../assets/artist-banner.jpg"},
    {name:"Display",image:"../../assets/artist-banner.jpg"},
    {name:"Keyboard",image:"../../assets/artist-banner.jpg"}
  ]

  constructor(private router:Router, private productService:ProductService) { }

  ngOnInit(): void {
  }

  product_type_clicked(event:Event){
    var html = event.target as HTMLElement;
    var image= html.nextElementSibling.getAttribute('src');
    console.log(image);
    console.log(html.id)
    this.productService.productTypeChanged({type:html.id.toString(),image:image});
    this.router.navigate(["/product-brand"]);
  }

}
