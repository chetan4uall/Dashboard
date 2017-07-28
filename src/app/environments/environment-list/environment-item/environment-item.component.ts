import { Component, OnInit,Input } from '@angular/core';

import { Environment } from "../../environment.model";
import {EnvironmentService} from '../../environment.service';

@Component({
  selector: 'app-environment-item',
  templateUrl: './environment-item.component.html',
  styleUrls: ['./environment-item.component.css']
})
export class EnvironmentItemComponent implements OnInit {

  constructor(private environmentService: EnvironmentService) { }
  @Input() environment:Environment;
  @Input() index:number;

  ngOnInit() {
  }

 

}
