import {EventEmitter} from '@angular/core';

import {Environment} from './environment.model';
import { Application } from "../shared/application.model";

export class EnvironmentService{


    environmentSelected=new EventEmitter<Environment>();

   private environments: Environment[]=[
        new Environment('Pre-Sit(Env1)','238.103.133.37',
        [
            new Application('sales backend','4.4.1/41.6.1','07.06.2017'),
            new Application('service point','4.4.1/40.2.4','06.05.2017'),
             new Application('CRM','4.4.1/41.6.1','06.05.2017'),
                new Application('sales backend','4.4.1/41.1','07.06.2017'),
                 new Application('CRM','4.4.1/41.6.1','06.05.2017'),
            new Application('sales backend','4.4.1/41.1','07.06.2017')
        ]),
        new Environment('SIT(ENV 4)','91.88.224.5',
        [
            new Application('CRM','4.4.1/41.6.1','06.05.2017'),
            new Application('sales backend','4.4.1/41.1','07.06.2017')
        ]),
        new Environment('SIT(ENV 1)','101.88.224.52',
        [
            new Application('CRM','4.4.1/41.6.1','06.05.2017'),
            new Application('sales backend','4.4.1/41.1','07.06.2017'),
             new Application('CRM','4.4.1/41.6.1','06.05.2017'),
            new Application('sales backend','4.4.1/41.1','07.06.2017')
            
        ])
    ];        

    getEnvironment(){
        return this.environments.slice();
    }
    getApplications(index:number){
        return this.environments[index].applications;
    }
}