import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatPattern',
  pure:false
})
export class RepeatPatternPipe implements PipeTransform {

 transform(repeatString:string, noOfTimes:number, symbol:string){
  //new Array[5].fill('hello').join('#')--> hello#hello#hello#hello#hello
  var finalString;
  
     finalString = Array(noOfTimes).fill(repeatString).join(symbol);
     console.log(finalString);
     return finalString;

 }

}
