import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../entite/product";

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: Product[], cdt : boolean) {
    if (cdt == true){
      return value.sort((a, b) => {
        return (a.stock === b.stock) ? 0 : a.stock ? -1 : 1;
      })
    }
    return value;
  }

}
