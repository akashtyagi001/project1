import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(valueList: any,gender:any): any{
    let arr=[];


    if (gender== undefined)
    {
      valueList;
    }
    else
    {
      for(let obj of valueList){
        if(obj.gender==gender)
      arr.push(obj);
      }
      return arr;
    }
    }
  }
  
