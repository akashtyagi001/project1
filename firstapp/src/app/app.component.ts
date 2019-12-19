import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  isValid=true;
  projectsList=[
    {
      'projectId':'P101',
      'projectName':'Citi'
    },
    {
      'projectId':'P102',
      'projectName':'RBC'
    },
    {
      'projectId':'P103',
      'projectName':'ABC'
    },
    {
      'projectId':'P104',
      'projectName':'XYZ'
    },
    {
      'projectId':'P105',
      'projectName':'DEF'
    }
  ];

  changeVal(inp:any){
    this.isValid=inp;
    this.myChoosenVal='';
  }
  addNewRow(pId:any,pName:any){
    let project={
      'projectId':pId,
      'projectName':pName
    };
    this.projectsList.push(project);
  }

  removeRow(pId:any){
    for(let i=0;i<this.projectsList.length;i++){
      if(this.projectsList[i].projectId==pId){
        this.projectsList.splice(i,1);
      }
    }
  }
  
  myChoosenVal:string=''  ;
  setValue(myEventObj:any){
    this.myChoosenVal=myEventObj.target.value;
    console.log(this.myChoosenVal);
  }

}
