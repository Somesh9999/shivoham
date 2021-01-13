import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productType } from './productType.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productType: productType;

  constructor() { }

}
