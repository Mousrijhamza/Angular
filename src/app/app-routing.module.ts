import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TP2Component} from "./tp2/tp2.component";

import {Tp1Component} from "./tp1/tp1.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path : '', component : AppComponent},
  {path : 'tp1', component : Tp1Component},
  {path : 'tp2', component: TP2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
