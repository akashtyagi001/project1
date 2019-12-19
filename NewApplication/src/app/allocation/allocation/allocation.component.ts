import { Component, OnInit } from '@angular/core';
import { AllocateService } from '../allocate.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Allocation } from '../allocation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  pAlloc: Allocation;
  // y: any;
  
  allProjectList = [];
   allRoleList = [];
   allEmployee = [];
  // allProjectAllocation = [];
  // constructor(, private router: Router, private fb: FormBuilder, private allocateservice: AllocateService, ) { }
  
  constructor(private  fb: FormBuilder,private allocateService: AllocateService,private http: HttpClient,private router: Router) { }

  locations:string[]=['--Select Location---','onshore','offshore'];
  
  AllocationForm = this.fb.group({

     employeeId: ['', Validators.required],
     projectId: ['', Validators.required],
     roleId: ['', Validators.required],
     location:[this.locations[0]]
   })
 
  ngOnInit() {
    this.allocateService.getAllProject().subscribe(data => this.allProjectList = data);
    this.allocateService.getAllRole().subscribe(data => this.allRoleList = data);
    this.allocateService.getAllEmployee().subscribe(data => this.allEmployee = data);
    //this.allocateService.getAllProjectAllocation().subscribe(data => this.allProjectAllocation = data);
    if(!sessionStorage.userObj)
    {
      this.router.navigate(['/login']);
    }

  }



  url = "http://localhost:8007/Billing-front/submitProjectAllocation";

  onAlloc() {
    console.log(this.AllocationForm.value);
     this.pAlloc = this.AllocationForm.value;
      this.AllocationForm.reset();
  
     this.http.post(this.url, this.pAlloc, { responseType: 'text' as 'json' })
        .subscribe(data => {
          
        alert("Project allocation succesfully...");
        },
         error => {
            alert("Project has been already allocated");
          }
        );
  }
}
