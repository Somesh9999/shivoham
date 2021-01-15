import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Products/product.service';
import { productType } from 'src/app/Products/productType.model';
import { stageInfo } from 'src/app/stage-teaser/stageInfo.model';
import {mimeType} from './mime-type.validator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stageInfo:stageInfo;
  isLoading= false;
  form:FormGroup;
  productBrandForm:FormGroup;
  imagePreview: string;
  brandImagePreview:string;
  productTypes:productType;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.stageInfo={
      stageText:"Admin Panel",
      stageImage:"../../../assets/admin-banner4.jpg"
    };
    this.form= new FormGroup({
      productType: new FormControl(null,{validators:[Validators.required]}),
      typeImage: new FormControl(null, {validators:[Validators.required], asyncValidators:[mimeType]})
    });
    this.productBrandForm= new FormGroup({
      productBrandType: new FormControl(null,{validators:[Validators.required]}),
      productBrand: new FormControl(null,{validators:[Validators.required]}),
      brandImage: new FormControl(null, {validators:[Validators.required], asyncValidators:[mimeType]})
    });
  }

  onCreateProductType(){
    if(this.form.invalid){
      return;
    }
    else{
      this.productService.addProductType(this.form.value.productType,this.form.value.typeImage);
    }
  }

  onCreateProductBrand(){
    if(this.productBrandForm.invalid){
      return ;
    }
    else{
      this.productService.addProductBrand(this.productBrandForm.value.productBrandType,this.productBrandForm.value.productBrand,this.productBrandForm.value.brandImage);
    }
  }

  onImagePicked(event: Event){
    const file= (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      typeImage: file
    });
    this.form.get('typeImage').updateValueAndValidity();
    const reader= new FileReader();
    reader.onload=()=>{
      this.imagePreview= reader.result.toString();
    }
    reader.readAsDataURL(file);
  }

  onBrandImagePicked(event: Event){
    const file= (event.target as HTMLInputElement).files[0];
    this.productBrandForm.patchValue({
      brandImage: file
    });
    this.productBrandForm.get('brandImage').updateValueAndValidity();
    const reader= new FileReader();
    reader.onload=()=>{
      this.brandImagePreview= reader.result.toString();
    }
    reader.readAsDataURL(file);
  }

}
