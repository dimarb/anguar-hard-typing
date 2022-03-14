import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PlanetClass as Model, PlanetResponse as ResponseModel } from "../models/planet-class.model";
import {environment as e} from "../../environments/environment";
import {Http} from "../interfaces/http.model";


@Injectable({
  providedIn: 'root'
})
export  class  PlanetService  implements Http{
  constructor(private http : HttpClient) { }

  set(id: Number): Observable<Model> {
        throw new Error("Method not implemented.");
  }

  delete(id: Number): Observable<Model> {
      throw new Error("Method not implemented.");
  }

  get() : Observable<ResponseModel> {
    try{
      return  this.http.get<ResponseModel>(`${e.swapiUrl}/${this.model}/`);
    }catch (e) {
      throw new Error(`HTTP Fail: ${e}` );
    }
  }

  model: String = "planets";
};
