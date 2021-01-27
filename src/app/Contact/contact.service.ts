import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { contactFormData } from './contact-form-data.model';
import { Router } from '@angular/router';
import { contactEnquiry } from './contact-enquiry.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient,private router:Router, private snackBar: MatSnackBar) { }

  addContactFormData(contactFormData:contactFormData){
    this.http.post<{message:string}>("https://stormy-peak-34323.herokuapp.com/api/contact/addContactFormData",contactFormData).subscribe(res=>{
      this.router.navigate(['/']);
      this.snackBar.open("Contact Submitted", 'OK', {
        duration: 5000
      });
    });
  }

  addContactEnquiryData(contactEnquiryData:contactEnquiry){
    this.http.post<{message:string}>("https://stormy-peak-34323.herokuapp.com/api/contact/addContactEnquiryData",contactEnquiryData).subscribe(res=>{
      this.snackBar.open("Enquiry Submitted", 'OK', {
        duration: 5000
      });
    });
  }

}
