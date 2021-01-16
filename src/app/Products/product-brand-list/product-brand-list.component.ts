import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { contactEnquiry } from 'src/app/Contact/contact-enquiry.model';
import { ContactService } from 'src/app/Contact/contact.service';
import { stageInfo } from 'src/app/stage-teaser/stageInfo.model';
import { ProductService } from '../product.service';
import { productBrand } from '../productBrand.model';

@Component({
  selector: 'app-product-brand-list',
  templateUrl: './product-brand-list.component.html',
  styleUrls: ['./product-brand-list.component.css']
})
export class ProductBrandListComponent implements OnInit {

  contactProduct:string;
  contactEnquiryData:contactEnquiry;

  product_brands:productBrand[]=[];
  sub=new Subscription();

  @Input() stageInfo:stageInfo; //To get productType that is passed to the stage section by parent component

  //Pagination
  totalPosts= 1;
  pageSize= 3;
  pageSizeOptions=[3,6,9];
  currentPage=1;

  constructor(private contactService:ContactService,private productService:ProductService) { }

  @ViewChild('closebutton') closebutton;

  ngOnInit(): void {
    this.productService.getProductBrand(this.pageSize,this.currentPage,this.stageInfo.stageText);
    this.sub=this.productService.getProductBrandSubject().subscribe((productBrandData=>{
      this.product_brands=productBrandData.productBrand;
      this.totalPosts=productBrandData.productBrandCount;
      console.log(this.product_brands);
    }))
  }

  onContactSubmit(contactEnquiryForm){
    if(contactEnquiryForm.invalid){
      return;
    }
    this.contactEnquiryData={
      product:this.contactProduct,
      email:contactEnquiryForm.value.email,
      contact:contactEnquiryForm.value.contact,
      description:contactEnquiryForm.value.description
    }
    this.contactService.addContactEnquiryData(this.contactEnquiryData);
    this.closebutton.nativeElement.click();
    contactEnquiryForm.reset();

  }

  onContactClicked(event: Event){
    var html= event.target as HTMLElement;
    this.contactProduct= html.id;
  }

  onPageChanged(pageData: PageEvent){
    this.currentPage= pageData.pageIndex +1;
    this.pageSize= pageData.pageSize;
    this.productService.getProductBrand(this.pageSize,this.currentPage,this.stageInfo.stageText);
  }

}
