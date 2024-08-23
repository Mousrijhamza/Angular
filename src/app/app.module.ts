import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { TP2Component } from './tp2/tp2.component';
import { Tp1Component } from './tp1/tp1.component';
import {AppComponent} from "./app.component";
import {FilterpipePipe} from "./pipe/filterpipe.pipe";

import { Click1Directive } from './directives/click1.directive';
import { NomPipe } from './pipe/nom.pipe';
import { PrixPipe } from './pipe/prix.pipe';
import { StockPipe } from './pipe/stock.pipe';
import {HighlightDirectiveDirective} from "./directives/highlight-directive.directive";

@NgModule({
  declarations: [
    AppComponent,
    TP2Component,
    Tp1Component,
    FilterpipePipe,
    FilterpipePipe,
    Click1Directive,
    NomPipe,
    PrixPipe,
    StockPipe,
    HighlightDirectiveDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
