import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';
import { contactEnquiry } from 'src/app/Contact/contact-enquiry.model';
import { ContactService } from 'src/app/Contact/contact.service';
import { ProductService } from '../product.service';
import { productType } from '../productType.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product_types:productType[]=[];
  sub=new Subscription();

  contactProduct:string;
  contactEnquiryData:contactEnquiry;

  //Pagination
  totalPosts= 1;
  pageSize= 6;
  pageSizeOptions=[3,6,9];
  currentPage=1;

  constructor(private router:Router, private productService:ProductService, private contactService:ContactService) { }

  ngOnInit(): void {
    this.productService.getProductType(this.pageSize,this.currentPage);
    this.sub=this.productService.getProductTypeSubject().subscribe((productData=>{
      this.product_types=productData.productType;
      this.totalPosts=productData.productCount;
      console.log(this.product_types);
    }))
  }

  @ViewChild('closebutton') closebutton;

  product_type_clicked(event:Event){
    /*var html = event.target as HTMLElement;
    var image= html.nextElementSibling.getAttribute('src');
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "stageText": html.id.toString(),
        "stageImage":image.toString()
      }
    };
    this.router.navigate(["/product-brand"],navigationExtras);*/
  }

  onPageChanged(pageData: PageEvent){
    this.currentPage= pageData.pageIndex +1;
    this.pageSize= pageData.pageSize;
    this.productService.getProductType(this.pageSize,this.currentPage);
  }

  onContactClicked(event: Event){
    var html= event.target as HTMLElement;
    this.contactProduct= html.id;
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

  unfocus(event:Event){}

}
