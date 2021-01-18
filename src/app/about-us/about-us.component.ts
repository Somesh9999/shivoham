import { Component, OnInit } from '@angular/core';
import { stageInfo } from '../stage-teaser/stageInfo.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  stageInfo:stageInfo;

  constructor() { }

  ngOnInit(): void {
    this.stageInfo={
      stageText:"Know About Us",
      stageImage:"../../assets/about-banner.jpg"
    }
  }

}
