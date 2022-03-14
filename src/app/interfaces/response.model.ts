import {Model} from "./model.model";

export interface Response {
  count: Number,
  next: String,
  previous: String,
  results : Model[]
}
