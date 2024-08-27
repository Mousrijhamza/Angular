import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../entite/product";
import { UUID } from 'angular2-uuid';
import {NomPipe} from "../pipe/nom.pipe";

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


  allchecked : boolean  = false;
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
    this.product.addproduct(pp)
    this.add = !this.add;
    this._products = this.product.getallProduct();


  }


  btn1_click() {
    if (this.btn1 == false){
      this.btn1 =!this.btn1
    }else {
      this.ngOnInit()
      this.btn1 =! this.btn1
    }


  }
  btn2_click() {
    if (this.btn2 == false){
      this.btn2 =!this.btn2
    }else {
      this.ngOnInit()
      this.btn2 =! this.btn2
    }
  }
  btn3_click() {
    if (this.btn3 == false){
      this.btn3 =!this.btn3
    }else {
      this.ngOnInit()
      this.btn3 =! this.btn3
    }
  }

  checkall() {
    if(this.allchecked == false){
      this.allchecked != this.allchecked
    }else {
      this.ngOnInit()
      this.allchecked != this.allchecked
    }
  }

  onEventhandle($event : any) {
      const id = $event.target.value;
      const isChecked = $event.target.checked;

      this._products = this._products.map((pip : Product) =>{
          if (pip.id === id){
            pip.select = isChecked
            return pip
          }
          return pip

        })






  }

  selectAll() {
    this.allchecked =! this.allchecked
    this._products.map((p)=>{
      p.select = this.allchecked;
    })
  }

  performDelete() {
    this.product.setProduct(
      this._products.filter( function (pip) {
        return pip.select != true

      })
    );
    this.ngOnInit()
  }
}
