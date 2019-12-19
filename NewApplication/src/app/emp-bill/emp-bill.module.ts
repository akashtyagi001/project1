import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpBillRoutingModule } from './emp-bill-routing.module';
import { BillComponent } from './bill/bill.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BillComponent],
  imports: [
    CommonModule,
    EmpBillRoutingModule,ReactiveFormsModule
  ],exports:[BillComponent]
})
export class EmpBillModule { }
