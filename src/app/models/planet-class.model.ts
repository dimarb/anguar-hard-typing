import {Model} from "../interfaces/model.model";
import {Response} from "../interfaces/response.model";

export class PlanetClass implements Model {
  constructor(public  name: String, public rotation_period: Number, public diameter: Number, public created: String, public edited: String) { }
}

export class PlanetResponse implements Response {
  constructor(public count: Number, public next: String, public previous: String, public results: PlanetClass[]) { }
}
