import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';
import { GenderPipe} from './gender.pipe';
import { PowerComponent } from './power/power.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ReversePipe,
   FilterPipe,
   GenderPipe,
   PowerComponent,
   ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
