import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { BranchListComponent } from "./branch-list/branch-list.component";
import { EnvironmentsComponent } from "./environments/environments.component";
import { EnvironmentDetailComponent } from "./environments/environment-detail/environment-detail.component";

const appRoutes:Routes=[
    {path: '', redirectTo:'/environments',pathMatch:'full'},
    {path: 'environments', component: EnvironmentsComponent, 
    children:    [
            {path: ':id',component:EnvironmentDetailComponent}
        ]
},

    {path:'branch-list',component: BranchListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}