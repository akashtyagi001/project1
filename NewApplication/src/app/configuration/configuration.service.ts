import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {


  constructor(private http:HttpClient) { }
  
  url="http://localhost:8007/Billing-front/getAllProjects";
  getAllProject():Observable<any>
  {
    return this.http.get(this.url);
  }
  url2="http://localhost:8007/Billing-front/getRoles";
  getRoles():Observable<any>
  {
    return this.http.get(this.url2);
  }
  url3="http://localhost:8007/Billing-front/getAllProjectConfig";
  getAllProjectConfig():Observable<any>
  {
    return this.http.get(this.url3);
  }
  url4="http://localhost:8007/Billing-front/submitProjectConfig";
  setProjectConfig():Observable<any>
  {
    return this.http.get(this.url4);
  }
    Addconfig(pconfig:any):Observable<string>{
   return this.http.post<string>("http://localhost:8007/Billing-front/submitProjectConfig",pconfig,
  {responseType:'text' as 'json'});
   }
}
