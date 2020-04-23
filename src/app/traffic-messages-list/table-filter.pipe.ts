import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(value: any, filterStr: string, propertyName: string[]): any {
    if( value.length === 0 || filterStr.length === 0  )
    {
      //makes no sense filtering empty value
      return value;
    }
    const filteredResult = [];
    for(let element of value){
        propertyName.forEach(key => {     
          if(element[key].toUpperCase() === filterStr.toUpperCase()){
            filteredResult.push(element)
          }
        });
    }
    return filteredResult;
  }

}


