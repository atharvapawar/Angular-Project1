import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps'
})
export class CapsPipe implements PipeTransform {

  transform(firstname:any, lastname:any){
      var upperCaseFirstname = firstname.toUpperCase();
      var upperCaseLastname = lastname.toUpperCase();
      var fullname = upperCaseFirstname + "-" + upperCaseLastname;
      return fullname;
  }
}
