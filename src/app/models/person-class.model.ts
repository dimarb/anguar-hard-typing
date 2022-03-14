import {Response} from "../interfaces/response.model";
import {Model} from "../interfaces/model.model";

export class PersonClass implements Model {
  created: String;
  edited: String;
  name : String;
  height : Number;
  mass : Number;


  constructor(created: String, edited: String, name: String, height: Number, mass: Number) {
    this.created = created;
    this.edited = edited;
    this.name = name;
    this.height = height;
    this.mass = mass;
  }
}
export class PersonResponse implements Response{
  count: Number;
  next: String;
  previous: String;
  results: PersonClass[];


  constructor(count: Number, next: String, previous: String, results: PersonClass[]) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}
