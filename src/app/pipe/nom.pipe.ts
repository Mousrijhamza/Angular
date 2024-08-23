import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../entite/product";

@Pipe({
  name: 'nom'
})
export class NomPipe implements PipeTransform {

  transform(value: Product[], cdt : boolean) {
    if (cdt == true){
      return value.sort((a, b) =>
          {return a.name.localeCompare(b.name)});
    }
    return value;
  }

}
