import { Component, OnInit } from '@angular/core';
import { ɵngStyleDirectiveDef__POST_R3__ } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departmentdetail',
  template: `<p>
  Department with department Id {{departmentId}} {{departmentName}} selected....
  
  </p>`
})
export class DepartmentdetailComponent implements OnInit {
private departmentId:number;

  constructor(private activatedRouteObj:ActivatedRoute)  { }

  ngOnInit() {
let id=parseInt(this.activatedRouteObj.snapshot.paramMap.get('deptId'));

this.departmentId=id;
console.log(name);

  }

}
