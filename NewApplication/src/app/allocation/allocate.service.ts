import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllocateService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8007/Billing-front/allocationProject";
  getAllProject():Observable<any>
  {
    return this.http.get(this.url);
  }
  url2="http://localhost:8007/Billing-front/allocationRole";
  getAllRole():Observable<any>
  {
    return this.http.get(this.url2);
  }
  url3="http://localhost:8007/Billing-front/allocationEmployee";
  getAllEmployee():Observable<any>
  {
    return this.http.get(this.url3);
  }
  url4="http://localhost:8007/Billing-front/allocationprojectAllo";
  getAllProjectAllocation():Observable<any>
  {
    return this.http.get(this.url4);
  }
}
