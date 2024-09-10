import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahr'
})

export class FahrPipe implements PipeTransform {

  transform(celcius:any) :any {
    var fahre=0;
    fahre = (celcius * 9/5) +32;
      return fahre+"F";
  }

}
