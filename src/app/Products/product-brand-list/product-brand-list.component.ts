import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-product-brand-list',
  templateUrl: './product-brand-list.component.html',
  styleUrls: ['./product-brand-list.component.css']
})
export class ProductBrandListComponent implements OnInit {

  contactProduct:string;

  product_brands=[
    {name:"Hard-Disk",image:"../../assets/artist-banner.jpg"},
    {name:"Graphic Card",image:"../../assets/artist-banner.jpg"},
    {name:"RAM",image:"../../assets/artist-banner.jpg"},
    {name:"Mother Board",image:"../../assets/artist-banner.jpg"},
    {name:"Monitor",image:"../../assets/artist-banner.jpg"},
    {name:"Display",image:"../../assets/artist-banner.jpg"},
    {name:"Keyboard",image:"../../assets/artist-banner.jpg"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onContactSubmit(contactform){

  }

  onContactClicked(event: Event){
    var html= event.target as HTMLElement;
    this.contactProduct= html.id;
  }

}
