import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import { FormsModules } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { SonComponent } from "./son/son.component";
import { NextComponent } from "./next/next.component";
import { RouterModule } from "@angular/router";
import { HolaComponent } from './hola/hola.component';

@NgModule({
  declarations: [AppComponent, FormComponent, SonComponent, NextComponent, HolaComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  exports: [SonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
