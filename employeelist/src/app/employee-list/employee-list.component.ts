import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  constructor(private empService:EmployeeServiceService) { }
    public empArray:IEmployee[];
    public errorMsg;
  ngOnInit() {
    this.empService.getEmployees().subscribe(
      data=>this.empArray=data,error=>this.errorMsg=error);

    }

    deleteEmployee(emp:any){
      console.log(emp.personId);
      this.empService.deleteEmployee(emp.personId).subscribe(
        d=>{
          
          /*this.empArray=this.empArray.filter(obj=>obj!=emp);*/


          this.empArray.forEach( (item, index) => {
            if(item === emp) this.empArray.splice(index,1);
          });

        }
      );
      
    }
  }


