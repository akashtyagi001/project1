import { Employee } from '../employee';
import { ProjectConfiguration } from '../project-configuration';


export class Allocation {
allocId:number;
 EmplObj:Employee;
 ConfigObj:ProjectConfiguration;
  projectId: string;
constructor(allocId, EmplObj,ConfigObj)
{
     this.allocId=allocId;
     this.ConfigObj=ConfigObj;
     this.EmplObj=EmplObj;
     

}

}
