import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeServiceService } from './employee-service.service';
import { PersonFormComponent } from './person-form/person-form.component';
import { FormsModule }   from '@angular/forms';
import { ReactFormComponent } from './react-form/react-form.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeedetailComponent,
    PersonFormComponent,
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
