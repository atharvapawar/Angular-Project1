import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent {
  fname="";
  laname="";
  repeatString="";
  noOfTimes:number=1;
  symbol="";
  password="";
  sname = "RAMESH"
  lname = "hariraj"
  dob= new Date('03-04-1996');
  obj = {id:1, name:"Angel",gender:"Female",age:25}
  amount = 125;
  totalPer=0.456718;
  celcius = "";
}
