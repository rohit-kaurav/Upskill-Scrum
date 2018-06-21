import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortbrief'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return null;
    }

    if(value.length>28){
    return value.substr(0,25)+'...'
    }else{
      return value
    }
  }

}
