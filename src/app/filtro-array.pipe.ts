import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(value.length === 0 || args.length === 0 || args[0] === undefined){
      return value;
    }

    for(let a of args){
      let filter = a.toLocaleLowerCase();
      value = value.filter(
        v => v.toLocaleLowerCase().indexOf(filter) != -1
      );
    }

    return value;
  }

}
