import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { DataService } from "../services/data.service";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  //se inyecta el servicio
  constructor(private dataService: DataService) {}

  name: string;
  fistSurname: string;
  secondSurname: string;
  home: string;

  ngOnInit() {}

  Rename() {
    // se emite un valor
    this.dataService.name$.emit("Mexico");
  }
}
