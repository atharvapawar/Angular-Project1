import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-examples',
  templateUrl: './databinding-examples.component.html',
  styleUrls: ['./databinding-examples.component.scss']
})
export class DatabindingExamplesComponent {
  title = 'angularbasics';
  num=5;
  isMarried= false;
  even=[2,4,6,8];
  student={id:1, name:"Naga", age:29};
  imgSrc="https://wallpaperaccess.com/full/284466.jpg";
  altString="No Image Found";
  paraColor = "orange";
  imgWidth="200";
  imgHeight = "200";
  tableColSpan="2";
  tableRowSpan="2";
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
isAdmin:boolean=true;
toggleUser():any{
  this.isAdmin = !this.isAdmin;
}
}
