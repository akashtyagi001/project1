import { Role } from './Role';

export class ProjectConfiguration {
    bill:number;
    location:string;
   projectId:number;
   RoleObj:Role;
   constructor(bill,location,projectId,RoleObj)
   {
       this.bill=bill;
       this.location=location;
       this.projectId=projectId;
       this.RoleObj=RoleObj;
   }
    



}
