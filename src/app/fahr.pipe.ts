import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahr'
})
export class FahrPipe implements PipeTransform {

  transform(celcius:any) :any {
    celcius = (celcius * 9/5) +32;  
    return celcius+"F";
  }

}
