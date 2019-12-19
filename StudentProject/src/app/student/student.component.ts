import { Component} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
cityList:any[]=[
      {
        "city":"Delhi",
        "student":[ 
            {"studentId":"101","studentName":"Akash"},
            {"studentId":"102","studentName":"Himanshu",},]
              
    }
  ,
    {
      "city":"Noida",
      "student":[ 
          {"studentId":"103","studentName":"krishna",},
          {"studentId":"104","studentName":"anuj"},]
            
      }
    ,

  {
    "city":"ghaziabad",
    "student":[ 
        {"studentId":"104","studentName":"Gourav",},
        {"studentId":"105","studentName":"Samanvay",},]
          
     },

    {
    "city":"ghaziabad",
    "student":[ 
        {"studentId":"106","studentName":"vikram",},
        {"studentId":"107","studentName":"Radhe",},]
          
}

  ]

  }

