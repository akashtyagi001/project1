import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorComponent } from './operator.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [OperatorComponent, AttendanceComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[OperatorComponent]
})
export class OperatorModule { }
