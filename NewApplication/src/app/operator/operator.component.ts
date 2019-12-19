import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {  if(!sessionStorage.userObj)
    {
      this.router.navigate(['/login']);
    }
  }

}
