import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';


const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
{path:'departments',component:DepartmentListComponent},
{path:'departments/:deptId',component:DepartmentdetailComponent},
{path:'employees',component:EmployeeListComponent},
{path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents=[DepartmentListComponent,EmployeeListComponent,PagenotfoundComponent,DepartmentdetailComponent]

export const routerConfig: Routes = [
  {
      path: 'employees',
      component: EmployeeListComponent
  },
  {
      path: 'deparments',
      component: DepartmentListComponent
  },
  {
      path: '',
      redirectTo: '/deparments',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/Pagenotfound',
      pathMatch: 'full'
  }
];