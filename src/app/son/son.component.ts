import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { User } from "../models/user";
import { DataService } from "../services/data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-son",
  templateUrl: "./son.component.html",
  styleUrls: ["./son.component.css"]
})
export class SonComponent implements OnInit, OnDestroy {
  message: string = "pais de origen ";
  // se declara la suscripcion
  nSuscription: Subscription;

  @Input() name: string;
  @Input() firstSurname: string;
  @Input() secondSurname: string;
  @Input() home: string;
  // @Input() user: User;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    //de esta manera se suscribe al metodo
    this.nSuscription = this.dataService.name$.subscribe(messag => {
      this.message = messag;
      console.log("name: ", messag);
    });
  }
  // se destruye la suscripcion para que solo se use 1 vez
  ngOnDestroy() {
    console.log("ngOnDestroy hijo");

    this.nSuscription.unsubscribe();
  }
}
