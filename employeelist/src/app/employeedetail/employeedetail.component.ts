import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from '../employee-list/IEmployee';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor(private empService:EmployeeServiceService) { }
  public empArray1:IEmployee[];
  public errorMsg;
  ngOnInit() {
    this.empService.getEmployees().subscribe(
      data=>this.empArray1=data,error=>this.errorMsg=error);
   
  }
  deleteEmployee(emp:any){
    console.log(emp.personId);
    this.empService.deleteEmployee(emp.personId).subscribe(
      d=>{
        
        /*this.empArray=this.empArray.filter(obj=>obj!=emp);*/


        this.empArray1.forEach( (item, index) => {
          if(item === emp) this.empArray1.splice(index,1);
        });

      }
    );
  }

}
