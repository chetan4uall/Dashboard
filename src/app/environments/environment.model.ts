import {Application} from '../shared/application.model';

export class Environment{

    public serverName: string;
    public ipAddress: string;
    public applications: Application[]; 

    constructor(serverName: string,ipAddress:string,applications:Application[]){
        this.serverName=serverName;
        this.ipAddress=ipAddress;
        this.applications=applications;
    }
}