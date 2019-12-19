import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { Role } from 'src/app/Role';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {


  public project:Project[];

public devRole:Role[];

public Employee:Employee[];

  constructor(private attendanceservice:AttendanceService,private router:Router) { }



  Attendanceform = new FormGroup({

    projectId: new FormControl(this.project),

    employeeId:new FormControl(this.Employee),

    month:new FormControl('',Validators.required),

    year:new FormControl('',Validators.required),

    halfDay:new FormControl('',Validators.required),

    fullDay:new FormControl('',Validators.required),

  

    

    

  });

 
  get month() { return this.Attendanceform.get('month'); }
  get year() { return this.Attendanceform.get('year'); }
  get halfDay() { return this.Attendanceform.get('halfDay'); }
  get fullDay() { return this.Attendanceform.get('fullDay'); }
  ngOnInit() {

    if(!sessionStorage.userObj)
    {
      this.router.navigate(['/login']);
    }

    this.attendanceservice.getProject().subscribe ( data=>this.project=data

      );



     



  }

  public done:string;

  projectselect(projectId:any){

    console.log('project Id : '+projectId);
    

    

    this.attendanceservice.getprojectemployee(projectId).subscribe(data=>this.Employee=data);



  }



  show:boolean=false;



  markSubmit(){
console.log(this.Attendanceform.value);
    this.attendanceservice.attendance(this.Attendanceform.value).subscribe(data=>{

    //  alert("done attendance successfully");

      this.done="Succesfully";

      this.show=true;



     //this.router.navigate(['./mark']);    



    },

  error=>{




    //alert("Allready Presented this configuration ");

    //this.done="cant be done configured";

    //this.router.navigate(['./mark']);

    this.done="Not Succesfully";

    this.show=true;



  });

  }}
