import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ConfigurationComponent],
  imports: [
    CommonModule, ReactiveFormsModule,
    HttpClientModule
   
  ], exports: [ConfigurationComponent]
})
export class ConfigurationModule { }
