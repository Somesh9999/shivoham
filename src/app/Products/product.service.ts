import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { productType } from './productType.model';
import { productBrand } from './productBrand.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productType: productType[]=[];
  productBrand: productBrand[]=[];

  constructor(private  http:HttpClient, private router:Router) { }

  private productTypeUpdated= new Subject<{productType:productType[],productCount:number}>();
  private productBrandUpdated= new Subject<{productBrand:productBrand[],productBrandCount:number}>();

  getProductTypeSubject(){
    return this.productTypeUpdated.asObservable();
  }

  getProductBrandSubject(){
    return this.productBrandUpdated.asObservable();
  }

  addProductType(type:string, imageFile:File){
    const productTypeData=new FormData();
    productTypeData.append("type",type);
    productTypeData.append("image",imageFile, type);
    this.http.post<{message:string, productType:productType}>("http://localhost:3030/api/product/addProductType",productTypeData).subscribe(res=>{
      console.log(res.message);
    });
  }

  addProductBrand(type:string, brand:string, imageFile:File){
    const productBrandData=new FormData();
    productBrandData.append("type",type);
    productBrandData.append("brand",brand);
    productBrandData.append("image",imageFile, brand);
    this.http.post<{message:string, productBrand:productBrand}>("http://localhost:3030/api/product/addProductBrand",productBrandData).subscribe(res=>{
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
    });
  }

  getProductBrand(pageSize: number, currentPage: number, productBrandType:string){
    let queryParam= `?pageSize=${pageSize}&currentPage=${currentPage}&productBrandType=${productBrandType}`;
    this.http.get<{message:string, productBrands:any,productBrandCount:number}>("http://localhost:3030/api/product/getProductBrand"+queryParam).pipe(map((productBrandData)=>{
      return {productBrand: productBrandData.productBrands.map((productBrand)=>{
        return {
          id: productBrand._id,
          type: productBrand.type,
          brand:productBrand.brand,
          image: productBrand.image
        };
      }), productBrandCount: productBrandData.productBrandCount }
    })).subscribe(transformedData=>{
      this.productBrand=transformedData.productBrand;
      this.productBrandUpdated.next({productBrand:[...this.productBrand],productBrandCount:transformedData.productBrandCount});
    });
  }

  }
