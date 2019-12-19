import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators}  from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { trigger,state, group, style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  counter:number=0;
  counterArray:number[]=[];
  addInArray(counter){

    this.counterArray.push(counter);
 }

public show_dialog : boolean = false;
public button_name : any = 'Show Paragraph';
toggle() {
  this.counter++;
  this.counterArray.push(this.counter);
  this.show_dialog = !this.show_dialog;
  if(this.show_dialog) 
    this.button_name = "Hide Paragraph";
  else
    this.button_name = "Show paragraph";
}

}