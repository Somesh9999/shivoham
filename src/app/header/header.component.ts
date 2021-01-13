import { Component, OnInit } from '@angular/core';
import { productType } from '../Products/productType.model';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stageInfo:productType;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navContactClicked(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type:"Feel Free To Contact Us",
        image:"../../assets/home-banner.jpg"
      }
    };
    this.router.navigate(['/contact-form'], navigationExtras);

  }

}
