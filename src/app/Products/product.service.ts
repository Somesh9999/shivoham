import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productType } from './productType.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productType: productType;

  constructor() { }

  private productTypeClicked= new BehaviorSubject<productType>({type:"Some Quote Text Here",image:"../../assets/home-banner.jpg"});
  currentProductType= this.productTypeClicked.asObservable();

  productTypeChanged(newProductType:productType){
    this.productTypeClicked.next(newProductType);
  }

}
