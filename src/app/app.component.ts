import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularbasics';
  num=5;
  isMarried= false;
  even=[2,4,6,8];
  student={id:1, name:"Naga", age:29};
  password="";

  sname = "RAMESH"
  lname = "hariraj"
  dob= new Date('03-04-1996');
  obj = {id:1, name:"Angel",gender:"Female",age:25}
  amount = 125;
  totalPer=0.456718;
  celcius = "";
  fname="";
  laname="";
  repeatString="";
  noOfTimes:number=1;
  symbol="";
  isVisible=false;

  toggleVisibility(){
    this.isVisible = ! this.isVisible;
  }



  //Default values for the variables
  fruit:string='';
  mark:number=0;
  isAdmin:boolean=true;
  odd:number[]=[];
  employee:object={};
  avg:number=0.0;
  vegetables:any;

  //attribute
  tableColSpan="2";
  tableRowSpan="2";

  //style

  //property
  imgSrc="https://wallpaperaccess.com/full/284466.jpg";
  altString="No Image Found";
  paraColor = "orange";
  imgWidth="200";
  imgHeight = "200";

  num1=9099;
  num2=9099;

  numbers=[12,849,784,829,9434];
  names=["Lisha","Rishab","Devi","Hamsa","Harry"];
  employees=[
    {eid:1, ename:"Gita", eage:40},
    {eid:2, ename:"Sita", eage:35},
    {eid:3, ename:"Leka", eage:42},
    {eid:4, ename:"Dia", eage:30}
  ];
  vowel = 'U';
  adminTextColor = 'red';
  userTextColor = 'green';
  sendNotification():string{
      alert("Notification sent!");
      return "happy";
  }

  changeColor():number{
    this.paraColor = "green";
    return 10;
  }

  originalColor():boolean{
    this.paraColor="orange";
    return true;
  }
toggleUser():any{
  this.isAdmin = !this.isAdmin;
}


}
