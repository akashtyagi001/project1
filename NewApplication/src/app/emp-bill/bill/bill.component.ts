import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
public Bills:String;
allEmployee = [];
  constructor(public fb: FormBuilder,private billService:BillService,private http:HttpClient,private router:Router){ }
 

  BillForm = this.fb.group({
    year:['',Validators.required],
    Month:['',Validators.required],
    employeeId:['',Validators.required]
  });
  get year() { return this.BillForm.get('year'); }
  get Month() { return this.BillForm.get('Month'); }
  
  ngOnInit() {
    this.billService.getAllEmployee().subscribe(data => this.allEmployee = data);
    if(!sessionStorage.userObj)
    {
      this.router.navigate(['/login']);
    }
  }
  onBill(){
console.log(this.BillForm.value);
console.log(this.BillForm.value.year,this.BillForm.value.month,parseInt(this.BillForm.value.employeeId));

    this.billService.bills(parseInt(this.BillForm.value.employeeId),this.BillForm.value.Month,this.BillForm.value.year).subscribe(

    data=>{
      let userObj = data;

      sessionStorage.setItem("uObj",JSON.stringify(userObj));    //session 
      console.log(userObj.role);

      
      alert("Bill Done successfully----------RS." +data);

     this.router.navigate(['./bill']);    
  },
  error=>{
    alert("Allready Presented this Bill ");
this.router.navigate(['./bill']);

 });
  }


  }


