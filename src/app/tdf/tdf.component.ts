import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {
customerName:any;
customerType:any;
terms:any;
description:any;
customerArray:any=[];
add(addCustomerForm:NgForm){
  this.customerArray.push(addCustomerForm.value);
}
}
