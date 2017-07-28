import { Component, OnInit } from '@angular/core';


import { EnvironmentService } from "./environment.service";
import { Environment } from "./environment.model";

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css'],
  providers: [EnvironmentService]
})
export class EnvironmentsComponent implements OnInit {

  selectedEnvironment:Environment;
  constructor(private environmentService: EnvironmentService) { }

  ngOnInit() {
    this.environmentService.environmentSelected
      .subscribe(
        (env: Environment)=>{
          this.selectedEnvironment=env;
        }
      )
  }

}
