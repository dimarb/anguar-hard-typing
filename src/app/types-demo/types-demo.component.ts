import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../services/planets'
import { PlanetResponse as ResponseModel} from "../models/planet-class.model";


@Component({
  selector: 'types-demo',
  templateUrl: './types-demo.component.html',
  styleUrls: ['./types-demo.component.css']
})
export class TypesDemoComponent implements OnInit {
  model : ResponseModel | undefined;
  constructor(private service : PlanetService ) { }

  ngOnInit(): void {
    this.init();
  }

   init(): void{
   this.service.get().subscribe(
      (response: ResponseModel) => {
        console.log("response",response );
        this.model = response
      });
  }

}
