import { Component, OnInit } from '@angular/core';


import { EnvironmentService } from "../environment.service";
import { Environment } from "../environment.model";

@Component({
  selector: 'app-environment-list',
  templateUrl: './environment-list.component.html',
  styleUrls: ['./environment-list.component.css']
})
export class EnvironmentListComponent implements OnInit {

  environments:Environment[];
  constructor(private environmentService: EnvironmentService) { }

  ngOnInit() {
    this.environments=this.environmentService.getEnvironment();
  }

}
