export class Project {
   public projectId:number;
   public projectName:string;
     public  active:string;
public description:string;
constructor( projectId,projectName,active,description){
    this.projectId=projectId;
    this.projectName=projectName;
    this.active=active;
    this.description=description;
}


}
