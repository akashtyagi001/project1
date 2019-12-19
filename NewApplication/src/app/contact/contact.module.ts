import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule
  ],exports:[ContactusComponent]
})
export class ContactModule { }
