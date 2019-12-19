import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }

  validate(userId:any,password:any):Observable<any>{
    return this.http.post<any>("http://localhost:8007/Billing-front/validate?userId="+userId+"&&password="+password,
    null);
  }

}




