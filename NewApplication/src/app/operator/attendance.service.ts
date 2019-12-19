import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { Role } from '../Role';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http:HttpClient) { }

  getProject():Observable<Project[]>{

    return this.http.get<Project[]>("http://localhost:8007/Billing-front/getAllProjects");



  }

  getRole():Observable<Role[]>{

    return this.http.get<Role[]>("http://localhost:8007/Billing-front/getRoles");



  }

  getemployee():Observable<[Employee]>{

    return this.http.get<[Employee]>("http://localhost:8007/Billing-front/allocationEmployee");



  }

  getprojectemployee(projectId):Observable<[Employee]>{

    return this.http.get<[Employee]>("http://localhost:8007/Billing-front/getEmployeeList?projectId="+projectId);

  }

  attendance(attendanceObj:any):Observable<boolean> {

    return this.http.post<any>("http://localhost:8007/Billing-front/submitEmployeeAttendance",attendanceObj,{responseType:'text'as'json'});

 }



}
