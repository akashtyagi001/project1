import { Component} from '@angular/core';
import { Person } from '../person';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  constructor(private empService:EmployeeServiceService,private router:Router) {}
  personObj=new Person();


  onSubmit(){
    this.empService.addPerson(this.personObj).subscribe(
      data=> {
        //console.log(data)
        alert("Person Added Succesfully...");
        this.router.navigate(["employeelist"]);
      });
  }
  }

