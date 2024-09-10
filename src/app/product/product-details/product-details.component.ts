import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productId:any;
  productName:any;
  productPrice:any;
  productCompany:any;
  productType:any;
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(p=>{
      // console.log(p['pid']);
      this.productId=p['pid'];
      this.productName=p['pName'];
      this.productPrice=p['pPrice'];
    })
    this.activatedRoute.queryParams.subscribe(q=>{
      this.productCompany=q['company'];      
      this.productType=q['type'];      
    })
  }
}
