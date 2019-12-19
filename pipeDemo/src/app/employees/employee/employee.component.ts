import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `
  <div class="container">
  List to be filtered on : 
  <input type="text" [(ngModel)]="test"/>
  <h1>Employees List</h1>
  <table border="1">
    <tr>
      <th>Employee Name</th>
      <th>Reverse EmployeeName</th>
      <th>Gender</th>
      <th>Salary</th>
      <th>Date of joining</th>
      <th>Appraisal</th>

    </tr>
    <tr *ngFor="let  employeeObj of employeeArr|filter:test">
    <td>{{employeeObj.employeeName|gender:employeeObj.gender}}</td>
    <td>{{employeeObj.employeeName|reverse}}</td>
    <td>{{employeeObj.gender}}</td>
    <td>{{employeeObj.employeeSalary|currency:'INR'}}</td>
    <td>{{employeeObj.employeeDOJ|date:"fullDate"|uppercase}}</td>
    <td>{{employeeObj.employeeAppraisal}}</td>
    </tr>
  </table>
</div>`
,
  styles: []
})
export class EmployeeComponent implements OnInit {
  filterCriteria:any='';
  employeeArr:any=[
    {
      'employeeName':'Akash Tyagi',
      'employeeSalary':35000,
      'gender':'male',
      'employeeDOJ':new Date(2019,4,20),
      'employeeAppraisal':10.987
      },
      {
        'employeeName':'Himanshu',  
        'employeeSalary':55000,
        'gender':'male',
        'employeeDOJ':new Date(2013,6,10),
        'employeeAppraisal':20.365
        },
        {
          'employeeName':'XYZ',
          'employeeSalary':105000,
          'gender':'Female',
          'employeeDOJ':new Date(2013,6,10),
          'employeeAppraisal':13.3495
          }
  ];

  constructor() { }

  ngOnInit() {
  }

}
