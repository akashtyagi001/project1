import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/admin/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
 
    
  constructor(private fb: FormBuilder,private loginService:LoginService,private router:Router) {  }
    loginForm = this.fb.group({
      userId: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });

  get userId()
  {
    return this.loginForm.get("userId");
  }

  get password()
  {
    return this.loginForm.get("password");
  }




userObj:User;



ngOnInit(){
  this.userObj=JSON.parse(sessionStorage.getItem("userObj"));
  
   


}
  onSubmit(){
    console.log(this.loginForm.value);
    this.loginService.validate(this.loginForm.value.userId,this.loginForm.value.password).subscribe(
      data=> {
        console.log(data);
        this.userObj=data;
        sessionStorage.setItem('userObj', JSON.stringify(this.userObj));
                                  //to check===>
                                  //whereever it is to be used- steps
                                  //1. declare userObj:any
                                  //2. inside onInit function body- this.userObj=JSON.parse(sessionStorage.userObj);
                                  //3. inside the required function:
                                    //this.userId=this.userObj.userId


          /*
          INSIDE EVERY ONINIT
          if(!sessionStorage.userObj)
            {
              this.router.navigate(['/login']);
            }

          
          */

        if(data.employeeRole=='admin')
        this.router.navigate(['/admin']);

        else
        {
         
          this.router.navigate(['/operator']);
       }
      },
  
      //  <!-- alert("Welcome User..");
      //   this.router.navigate(['/admin']);
      // },
      error=>{
        alert("Email or Password is incorrect");
    
      }
    );
    }
  }
  
  

