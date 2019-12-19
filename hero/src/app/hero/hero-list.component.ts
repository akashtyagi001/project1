import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  template: ` <br/> <h3>HEROS List</h3>
  <ul>
  <li  *ngFor="let h of heroArr" (click)="onselect(h)">
  {{h.Name}}
  </li>
  </ul>
  <app-herodetail [heroObj]="SelectedHeroObj"></app-herodetail>`
})
export class HeroListComponent implements OnInit {
  heroArr:any=[
    {
     
      'Name':'IronMan',
      },
      {
        'Name':'Krish',
        },
        {
          'Name':'SpriderMan',
          },
  ];
  constructor() { }

  ngOnInit() {}
  public name:String;
  selectedHeroObj:any;
    onSelect(selectedHeroObj:any){
      this.name=selectedHeroObj;
    }
  
}

