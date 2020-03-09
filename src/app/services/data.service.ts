import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  //el simbolo $ indica que es un observable

  name$ = new EventEmitter<string>();
  constructor() {}
}
