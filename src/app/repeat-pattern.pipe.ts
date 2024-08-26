import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatPattern',
  pure:false
})
export class RepeatPatternPipe implements PipeTransform {

  transform(repeatString:any, noOfTimes:any, symbol:any){
    var finalString = Array(noOfTimes).fill(repeatString).join(symbol);
    return finalString;    
  }

}
