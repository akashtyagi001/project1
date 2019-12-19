import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herodetail',
  templateUrl:  './herodetail.component.html',
  styles: []
})
export class HerodetailComponent implements OnInit {
 @Input() public selectHeroObj ;
  constructor() { }

  ngOnInit() {
    
 }
 heroObj:any='';
}
