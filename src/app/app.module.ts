import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { EnvironmentListComponent } from './environments/environment-list/environment-list.component';
import { EnvironmentItemComponent } from './environments/environment-list/environment-item/environment-item.component';
import { EnvironmentDetailComponent } from './environments/environment-detail/environment-detail.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnvironmentsComponent,
    EnvironmentListComponent,
    EnvironmentItemComponent,
    EnvironmentDetailComponent,
    BranchListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
