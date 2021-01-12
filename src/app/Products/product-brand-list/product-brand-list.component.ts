import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactDialogComponent } from 'src/app/Contact/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-product-brand-list',
  templateUrl: './product-brand-list.component.html',
  styleUrls: ['./product-brand-list.component.css']
})
export class ProductBrandListComponent implements OnInit {

  contactProduct:string;

  product_brands=[
    {name:"Hard-Disk",image:"../../assets/artist-banner.jpg"},
    {name:"Graphic Card",image:"../../assets/artist-banner.jpg"},
    {name:"RAM",image:"../../assets/artist-banner.jpg"},
    {name:"Mother Board",image:"../../assets/artist-banner.jpg"},
    {name:"Monitor",image:"../../assets/artist-banner.jpg"},
    {name:"Display",image:"../../assets/artist-banner.jpg"},
    {name:"Keyboard",image:"../../assets/artist-banner.jpg"}
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onContactSubmit(contactform){

  }

  onContactClicked(event: Event){
    var html= event.target as HTMLElement;
    this.contactProduct= html.id;
  }

  openContactDialog(){
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      data: {name: this.product_brands[0].name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
