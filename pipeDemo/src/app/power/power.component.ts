import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  template: `
  <body style="background-color:powderblue;">
  <h1 >Power Boost Calculator</h1>
  <div>Normal power: <input [(ngModel)]="power" placeholder="power"></div>
  <div>Boost factor: <input [(ngModel)]="factor" placeholder="power"></div>
  <button (click)="submit"></button>  
  <p>
    Super Hero Power: {{power | exponentialStrength: factor}}
  </p>
</body>`,
  styles: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power = 0;
  factor = 0;
  constructor() { }

  ngOnInit() {
  }

}
