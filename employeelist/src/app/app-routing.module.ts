import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { PersonFormComponent } from './person-form/person-form.component';



const routes: Routes = [  {path:'',redirectTo:'personform',pathMatch:'full'},
{path:'employeelist',component: EmployeeListComponent },
{path:'employeedetail',component: EmployeedetailComponent },
{path:'personform',component: PersonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
