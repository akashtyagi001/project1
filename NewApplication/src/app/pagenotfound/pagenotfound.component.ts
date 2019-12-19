import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styles: []
})
export class PagenotfoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {  if(!sessionStorage.userObj)
    {
      this.router.navigate(['/login']);
    }
  }

}
