import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConfigurationModule } from '../configuration.module';
import { ConfigurationService } from '../configuration.service';
import { ProjectConfiguration } from 'src/app/project-configuration';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  pconfig:ProjectConfiguration;
  project : any;
  role:any;
  pcObj:any;
  x:any;
  constructor(public fb: FormBuilder,private configurationService:ConfigurationService,private http:HttpClient,private router:Router) { }




  configureForm:FormGroup;

  get bill() { return this.configureForm.get('bill'); }
  ngOnInit() {
    this.configureForm = this.fb.group({
      configurationId: [''],
      bill:[,Validators.min(2)],
      location:['',Validators.required],
      projectId:['',Validators.required],
      roleId:['',Validators.required]
    })

    this.configurationService.getAllProject().subscribe(data => {
      this.project=data;
      console.log(this.project)
    },
    error => {
    console.log('Error ocurred',error); 
    }
  );
  this.configurationService.getRoles()
  .subscribe(data => {this.role=data;console.log(this.role)},
    error => {
      console.log('Error ocurred',error); 
    }
    );
    this.configurationService.getAllProjectConfig()
    .subscribe(data => {this.pcObj=data;console.log(this.pcObj)},
      error => {
        console.log('Error ocurred',error); 
      }
      );   
      if(!sessionStorage.userObj)
      {
        this.router.navigate(['/login']);
      }
  }

  
onConfig(){
    
    this.pconfig=this.configureForm.value;
    this.configureForm.reset();
    this.configurationService.Addconfig(this.pconfig)
    .subscribe(data => {
      this.x=data;
      alert("Project configured succesfully...");
    },
        error => {
          alert("Project has been already configured");
        }
        );
    }
  
 

}
