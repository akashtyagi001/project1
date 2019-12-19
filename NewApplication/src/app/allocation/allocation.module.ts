import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllocationComponent } from './allocation/allocation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AllocationComponent],
  imports: [
    CommonModule,ReactiveFormsModule,
    HttpClientModule
  ],exports: [AllocationComponent]
})
export class AllocationModule { }
