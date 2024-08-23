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

      {id:UUID.UUID(), name:"hp", price: 1000, stock : true},
      {id:UUID.UUID(), name:"printer", price: 1000,  stock : false},
      {id:UUID.UUID(), name:"Dell", price: 1200, stock : true},
      {id:UUID.UUID(), name:"printer", price: 100,  stock : false},
      {id:UUID.UUID(), name:"PS4", price: 200,  stock : true},
      {id:UUID.UUID(), name:"Ps5", price: 500,  stock : true},



    ]
  }
  getProduct()  {
    return of([...this._products]);
  }
}
