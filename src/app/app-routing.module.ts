import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GotHousesComponent } from "./got-houses/got-houses.component";

const routes: Routes = [
    {
      path: '',
      component: GotHousesComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }