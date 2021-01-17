import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { contactFormData } from './contact-form-data.model';
import { Router } from '@angular/router';
import { contactEnquiry } from './contact-enquiry.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient,private router:Router) { }

  addContactFormData(contactFormData:contactFormData){
    this.http.post<{message:string}>("https://stormy-peak-34323.herokuapp.com/api/contact/addContactFormData",contactFormData).subscribe(res=>{
      console.log(res.message);
      this.router.navigate(['/']);
    });
  }

  addContactEnquiryData(contactEnquiryData:contactEnquiry){
    this.http.post<{message:string}>("https://stormy-peak-34323.herokuapp.com/api/contact/addContactEnquiryData",contactEnquiryData).subscribe(res=>{
      console.log(res.message);
    });
  }

}
