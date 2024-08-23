import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../entite/product";


@Pipe({
  name: 'filterPipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: Product[], searchTerm: string) {
    if (!value){
      return []
    }
    if (!searchTerm){
      return value
    }

    return value.filter(item => {
      return String(item.name).toLowerCase().includes(searchTerm.toLowerCase())
      });
    
  }

}
