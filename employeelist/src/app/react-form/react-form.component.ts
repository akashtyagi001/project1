import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent  {


  constructor(private a:FormBuilder) { }
  reactForm=new FormGroup({
get userName() {
  return this.reactForm.get('userName');
  }
  reactForm=this.a.group({
    userName:['',[Validators.required,Validators.minLength(3)]],
    password:[''],
confirmPassword:[''],
address:this.a.group({
  pincode:[''],
  city:['']

})
  })
 } )

}
