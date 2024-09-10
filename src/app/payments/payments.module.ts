import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
