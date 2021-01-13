import { Component, OnInit } from '@angular/core';
import { productType } from '../Products/productType.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productType:productType;

  constructor() { }

  ngOnInit(): void {
    this.productType={
      type:"Some Quote Text",
      image:"../../assets/home-banner.jpg"
    }
  }

}
