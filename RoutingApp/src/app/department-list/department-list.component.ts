import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template:  ` <br/> <h3>Department List</h3>
  <ul>
  <li (click)="onSelect(department)" *ngFor="let department of departmentArr"
  class="list-group-item">
  {{department.departmentId}}   {{department.departmentName}}
  </li>
  </ul>`
})
export class DepartmentListComponent implements OnInit {
  
  departmentArr:any=[
    {
      'departmentId':101,
      'departmentName':'IT',
      },
      {
        'departmentId':102,
        'departmentName':'HR',
        },
        {
          'departmentId':103,
          'departmentName':'ACCOUNTS',
          },
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
onSelect(dept:any)
{
  console.log('i m clicked :'+dept.departmentId);
  this.router.navigate(['/departments',dept.departmentId]);
}
}
