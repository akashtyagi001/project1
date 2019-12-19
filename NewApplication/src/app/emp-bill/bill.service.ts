import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http:HttpClient) { }
bills(employeeId,month,year):Observable<any>
{
  console.log("http://localhost:8007/Billing-front/Bills?month="+month+"&&year="+year+"&&employeeId="+employeeId);
  return this.http.post<any>("http://localhost:8007/Billing-front/Bills?month="+month+"&&year="+year+"&&employeeId="+employeeId,
  {responseType:'text' as 'json'});
}
url3="http://localhost:8007/Billing-front/allocationEmployee";
getAllEmployee():Observable<any>
{
  return this.http.get(this.url3);
}
}
