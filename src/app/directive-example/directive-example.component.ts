import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.scss'
})
export class DirectiveExampleComponent {
  toggleUser() {
    throw new Error('Method not implemented.');
    }
      title = 'AngularBasics';
      num = 5;
      isMarried = false;
      even = [2,4,6,8];
      student = {id:1, name:"Naga", age:29};
      password="";
      
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
    
      toggleVisibility(){
        this.isVisible = !this.isVisible;
      }
    
      fruit:string='hello';
      mark:number=0;
      isAdmin:boolean=false;
      odd:number[]=[3];
      employee:object={};
      avj:number=0.1;
      vegetables:any=3;
    
      //property
      imgsrc = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      altString="No Image Found";
      paraColor = "orange";
      imgWidth = "200";
      imgHeight = "200";
    
      tableColSpan = 2;
      tableRowSpan = 2;
      orignalColor: any;
    
      sendNotification() {
        alert("Notification Sent!");
      }
    
      changeColor(){
        this.paraColor = "green";
      }
    
      OrignalColor(){
        this.paraColor = "orange";
      }
    
      ToggleUser(){
        this.isAdmin = !this.isAdmin;
      }
    
      printData(){
        console.log(this.password)
      }
    
      num1="";
      num2="";
    
      numbers = [12,849,784,829,9434]
      names = ['atharva','vedant','bunty','gaurav','rutvik']
    
      employees = [
        {eid:1, ename:"Gita", eage:40},
        {eid:2, ename:"Sita", eage:35},
        {eid:3, ename:"mita", eage:45},
        {eid:4, ename:"pita", eage:30}
      ]
    
      vowel="u";
      colorVairable="blue";
      colorVairable1="green";
      colorVairable2="salmon";
    
      findGreater(){
        if(this.num1>this.num2){
          return true
        }
        else {
          return false
        }
      }
}
