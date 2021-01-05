import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemHovered:boolean;
  dropdownImage:string;
  dropdownContent:string;
  authStatus=true;

  constructor() { }

  ngOnInit(): void {
  }

  mouseOverLink(event:Event){
    this.itemHovered=true;
    var htmlElement= event.target as HTMLElement;
    if(htmlElement.id=="trendingSong"){
      //document.getElementById('nav_dropdown').style.background="lightblue url('../assets/stage1.jpg') no-repeat fixed center";
      this.dropdownImage="../assets/stage1.jpg";
      this.dropdownContent="Get the top Trending Songs here.."
    }
    else if(htmlElement.id=="artists"){
      //document.getElementById('nav_dropdown').style.backgroundImage="url(../assets/stage1.jpg)";
      this.dropdownImage="../assets/artist-banner.jpg";
      this.dropdownContent="Looking For Your Favotite Artist.. Here you go..";
    }
    else if(htmlElement.id=="posts"){
      this.dropdownImage="../assets/posts.jpg";
      this.dropdownContent="Showcase Your Own Musical Talent Here..";
    }
  }

  mouseLeaveLink(event:Event){
    this.itemHovered=false;
    this.dropdownImage="";
    this.dropdownContent="";
  }
}
