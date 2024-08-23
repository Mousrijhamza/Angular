import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../entite/product";
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-tp2',
  templateUrl: './tp2.component.html',
  styleUrls: ['./tp2.component.css']
})
export class TP2Component implements OnInit{
  _products : Product[] = [];
  searchTerm : string = "";

  color1 = 'yellow'; color2 = 'yellow'

  name : string = ''
  stock !: boolean
  price !: 0
  category !: ''




  add : boolean = false;
  btn1: boolean = false;
  btn2: boolean = false;
  btn3: boolean = false;

  constructor(private product : ProductService) {

  }

  ngOnInit(): void {
     this.getallProduct();

  }




  getallProduct() {
    this.product.getProduct().subscribe( {
      next : value => {
        this._products = value;
        console.log(this._products)
      }
    })
  }

  add_produit() {
    this.add = !this.add
  }

  add_New_Product() {
    let pp : Product = {
      name : '',
      stock : false,
      price : 0,
      id : UUID.UUID(),
      category : ''
    }
    pp.name = this.name;
    pp.price= this.price;
    pp.stock = this.stock;
    pp.category = this.category;
    this._products.push(pp)
    this.add = !this.add;

  }


  btn1_click() {
    this.btn1 = !this.btn1
  }
  btn2_click() {
    this.btn2 = !this.btn2
  }
  btn3_click() {
    this.btn3 = !this.btn3
  }
}
