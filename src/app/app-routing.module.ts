import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { DatabindingExamplesComponent } from './databinding-examples/databinding-examples.component';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { AddLoanComponent } from './loans/add-loan/add-loan.component';
import { EditLoanComponent } from './loans/edit-loan/edit-loan.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentFilterComponent } from './student-filter/student-filter.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'directives-example', component:DirectivesExampleComponent},
  {path:'pipes-example',component:PipesExampleComponent},
  {path:'db-example', component:DatabindingExamplesComponent},
  {path:'loans', children:[
    {path:'',component:LoansComponent},
    {path:'add-loan',component:AddLoanComponent},
    {path:'edit-loan', component:EditLoanComponent}
  ]},
  {path:'products', children:[
    {path:'', component:ProductComponent},
    {path:':pid/:pName/:pPrice', component:ProductDetailsComponent}
  ]},
  {path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {path:'student-filter', component:StudentFilterComponent},
  {path:'tdf', component:TdfComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
