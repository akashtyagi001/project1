 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee-list/IEmployee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  getEmployeeData(): any[] {
    throw new Error("Method not implemented.");
  }
private serviceUrl:string="http://localhost:8007/PersonFront/persons";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("http://localhost:8007/PersonFront/");
  }

 deleteEmployee(pid:any):Observable<boolean>{
   return this.http.get<boolean>("http://localhost:8007/PersonFront/deletePerson/"+pid);
   

 }
 addPerson(p:any):Observable<String>{
  {return this.http.post<string>(this.serviceUrl,p,{responseType:'text' as 'json'});}
 }
}