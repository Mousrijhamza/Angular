import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../entite/product";

@Pipe({
  name: 'prix'
})
export class PrixPipe implements PipeTransform {

  transform(value: Product[], cdt : boolean) {
    if (cdt == true){
      return value.sort((a, b) =>
            {return a.price-b.price
          })
    }
    return value;
  }

}
