import {Observable} from "rxjs";

export interface Http {
  get() : Observable<any>;
  set(id : Number) : Observable<any>;
  delete(id : Number) : Observable<any>;
  model : String;
}
