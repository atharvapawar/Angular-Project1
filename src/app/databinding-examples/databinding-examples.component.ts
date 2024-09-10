import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-examples',
  templateUrl: './databinding-examples.component.html',
  styleUrl: './databinding-examples.component.scss'
})
export class DatabindingExamplesComponent {
  title = 'AngularBasics';
  num = 5;
  isMarried = false;
  even = [2,4,6,8];
  student = {id:1, name:"Naga", age:29};
  password="";

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
}
