import { Component, OnInit } from '@angular/core';
import { Environment } from "../environment.model";
import { EnvironmentService } from "../environment.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Application } from "../../shared/application.model";

@Component({
  selector: 'app-environment-detail',
  templateUrl: './environment-detail.component.html',
  styleUrls: ['./environment-detail.component.css']
})
export class EnvironmentDetailComponent implements OnInit {

  application:Application[];
  id:number;
  constructor(private environmentService: EnvironmentService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.id=+params['id'];
        this.application=this.environmentService.getApplications(this.id);
      }
    );
  }

}
