import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { productType } from 'src/app/Products/productType.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit,OnDestroy {

  stageInfo:productType;
  sub:Subscription;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub= this.activatedRoute.queryParamMap.subscribe(queryData=>{
      this.stageInfo={
        type:queryData.get("type").toString(),
        image:queryData.get("image").toString()
      }
    });
  }

  onContactFormSubmit(navContactForm){

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
