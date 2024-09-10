import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps',
  pure:true
})
export class CapsPipe implements PipeTransform {

 transform(firstname:any, lastname:any){
  var upperCaseFirstname = firstname.toUpperCase();
  var upperCaseLastname = lastname.toUpperCase();
  var fullname = upperCaseFirstname+ "-"+ upperCaseLastname;
    return fullname;
 }

}
