import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { productType } from 'src/app/Products/productType.model';
import { contactFormData } from '../contact-form-data.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit,OnDestroy {

  stageInfo:productType;
  contactFormData:contactFormData;
  sub:Subscription;

  constructor(private activatedRoute:ActivatedRoute, private contactService:ContactService) { }

  ngOnInit(): void {
    this.sub= this.activatedRoute.queryParamMap.subscribe(queryData=>{
      this.stageInfo={
        type:queryData.get("type").toString(),
        image:queryData.get("image").toString()
      }
    });
  }

  onContactFormSubmit(navContactForm){
    if(navContactForm.invalid){
      return;
    }
    this.contactFormData={
      name:navContactForm.value.name,
      subject:navContactForm.value.subject,
      message:navContactForm.value.message,
      email:navContactForm.value.email,
      contact:navContactForm.value.contact,
    };

    this.contactService.addContactFormData(this.contactFormData);
    navContactForm.reset();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
