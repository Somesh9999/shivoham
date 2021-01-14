import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { contactEnquiry } from 'src/app/Contact/contact-enquiry.model';
import { ContactService } from 'src/app/Contact/contact.service';

@Component({
  selector: 'app-product-brand-list',
  templateUrl: './product-brand-list.component.html',
  styleUrls: ['./product-brand-list.component.css']
})
export class ProductBrandListComponent implements OnInit {

  contactProduct:string;
  contactEnquiryData:contactEnquiry;

  product_brands=[
    {name:"Hard-Disk",image:"../../assets/artist-banner.jpg"},
    {name:"Graphic Card",image:"../../assets/artist-banner.jpg"},
    {name:"RAM",image:"../../assets/artist-banner.jpg"},
    {name:"Mother Board",image:"../../assets/artist-banner.jpg"},
    {name:"Monitor",image:"../../assets/artist-banner.jpg"},
    {name:"Display",image:"../../assets/artist-banner.jpg"},
    {name:"Keyboard",image:"../../assets/artist-banner.jpg"}
  ];

  constructor(private contactService:ContactService) { }

  @ViewChild('closebutton') closebutton;

  ngOnInit(): void {
  }

  onContactSubmit(contactEnquiryForm){
    if(contactEnquiryForm.invalid){
      return;
    }
    this.contactEnquiryData={
      product:this.contactProduct,
      email:contactEnquiryForm.value.email,
      contact:contactEnquiryForm.value.contact
    }
    this.contactService.addContactEnquiryData(this.contactEnquiryData);
    this.closebutton.nativeElement.click();
    contactEnquiryForm.reset();

  }

  onContactClicked(event: Event){
    var html= event.target as HTMLElement;
    this.contactProduct= html.id;
  }

}
