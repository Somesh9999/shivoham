import { Component, OnInit } from '@angular/core';
import { productType } from '../Products/productType.model';
import { stageInfo } from '../stage-teaser/stageInfo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stageInfo:stageInfo;

  constructor() { }

  ngOnInit(): void {
    this.stageInfo={
      stageText:"Some Quote Text",
      stageImage:"../../assets/home-banner.jpg"
    }
  }

}
