import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { HomeComponent } from './home/home/home.component';
import { AdminComponent } from './admin/admin.component';

import { OperatorComponent } from './operator/operator.component';
import { ConfigurationComponent } from './configuration/configuration/configuration.component';
import { AllocationComponent } from './allocation/allocation/allocation.component';

import { BillComponent } from './emp-bill/bill/bill.component';
import { AttendanceComponent } from './operator/attendance/attendance.component';
import { AppComponent } from './app.component';




const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: HomeComponent },
{path:'login',component: LoginComponent },
{path:'admin',component: AdminComponent },
{path:'aboutus',component: AboutusComponent },
{path:'contactus',component: ContactusComponent },
{path:'home',component: HomeComponent },
{path:'operator',component: OperatorComponent },
{path:'configuration',component: ConfigurationComponent },
{path:'allocation',component: AllocationComponent },
{path:'attendance',component: AttendanceComponent},
{path:'bill',component: BillComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
