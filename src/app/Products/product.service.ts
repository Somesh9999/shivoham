import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { productType } from './productType.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productType: productType[]=[];

  constructor(private  http:HttpClient, private router:Router) { }

  private productTypeUpdated= new Subject<{productType:productType[],productCount:number}>();

  getProductTypeSubject(){
    return this.productTypeUpdated.asObservable();
  }

  addProductType(type:string, imageFile:File){
    const productTypeData=new FormData();
    productTypeData.append("type",type);
    productTypeData.append("image",imageFile, type);
    this.http.post<{message:string, productType:productType}>("http://localhost:3030/api/product/addProductType",productTypeData).subscribe(res=>{
      console.log(res.message);
      this.router.navigate(["/"]);
    });
  }

  getProductType(pageSize: number, currentPage: number){
    let queryParam= `?pageSize=${pageSize}&currentPage=${currentPage}`;
    this.http.get<{message:string, productTypes:any,productCount:number}>("http://localhost:3030/api/product/getProductType"+queryParam).pipe(map((productTypeData)=>{
      return {productType: productTypeData.productTypes.map((productType)=>{
        return {
          id: productType._id,
          type: productType.type,
          image: productType.image
        };
      }), productCount: productTypeData.productCount }
    })).subscribe(transformedData=>{
      this.productType=transformedData.productType;
      this.productTypeUpdated.next({productType:[...this.productType],productCount:transformedData.productCount});
      this.router.navigate(["/"]);
    });
  }

  }
