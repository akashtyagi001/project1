import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routingComponents} from './app-routing.module';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DepartmentdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
