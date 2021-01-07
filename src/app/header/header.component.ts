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

    var htmlElement= event.target as HTMLElement;
    if(htmlElement.id=="products" || htmlElement.id=="products-anchor"){
      //document.getElementById('nav_dropdown').style.background="lightblue url('../assets/stage1.jpg') no-repeat fixed center";
      this.itemHovered=true;
      console.log(htmlElement.id);
      this.dropdownImage="../assets/artist-banner.jpg";
      this.dropdownContent="Looking For Your Favotite Artist.. Here you go..";
    }
  }

  mouseLeaveLink(event:Event){
    this.itemHovered=false;
    this.dropdownImage="";
    this.dropdownContent="";
  }
}
