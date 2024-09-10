import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.scss'
})
export class PipesExampleComponent {
  sname = "RAMESH"
  lname = "hariraj"
  dob = new Date('12-02-2002');
  obj = {id:1, name:"Angel", gender:"Female", age:25}
  amount = 125;
  totalPer=45.6718;
  celcius = "";
  fname = "";
  laname = "";
  repeatString ="";
  noOfTimes=0;
  symbol="";
  isVisible=false;
}
