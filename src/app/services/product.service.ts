import { Injectable } from '@angular/core';
import {Product} from "../entite/product";
import { UUID } from 'angular2-uuid';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products : Product[] = [];
  constructor() {
    this._products=[

      {id:UUID.UUID(), name:"hp", price: 1000, stock : true, select: false},
      {id:UUID.UUID(), name:"printer", price: 1000,  stock : false, select: false},
      {id:UUID.UUID(), name:"Dell", price: 1200, stock : true, select: true},
      {id:UUID.UUID(), name:"printer", price: 100,  stock : false, select: true},
      {id:UUID.UUID(), name:"PS4", price: 200,  stock : true, select: false},
      {id:UUID.UUID(), name:"Ps5", price: 500,  stock : true, select: false},
      {id:UUID.UUID(), name:"PS3", price: 100,  stock : true, select: false},
      {id:UUID.UUID(), name:"Xbox 360", price: 50,  stock : true, select: false},
      {id:UUID.UUID(), name:"xbox one", price: 200,  stock : true, select: false},
      {id:UUID.UUID(), name:"Microsoft", price: 450,  stock : true, select: false},



    ]
  }
  getProduct()  {
    return of([...this._products]);
  }

  addproduct(pp : Product) {
    this._products.push(pp);
  }

  getallProduct(){
    return this._products;
  }

  setProduct(P : Product[]){
    this._products = P;
  }
}
