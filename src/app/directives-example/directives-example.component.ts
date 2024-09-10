import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.scss']
})
export class DirectivesExampleComponent {
  isVisible=false;

  toggleVisibility(){
    this.isVisible = ! this.isVisible;
  }
  employees=[
    {eid:1, ename:"Gita", eage:40},
    {eid:2, ename:"Sita", eage:35},
    {eid:3, ename:"Leka", eage:42},
    {eid:4, ename:"Dia", eage:30}
  ];
  vowel = 'U';
  isAdmin:boolean=true;
  adminTextColor = 'red';
  userTextColor = 'green';
  num1=9099;
  num2=9099;

  numbers=[12,849,784,829,9434];
  names=["Lisha","Rishab","Devi","Hamsa","Harry"];
  toggleUser():any{
    this.isAdmin = !this.isAdmin;
  }
}
