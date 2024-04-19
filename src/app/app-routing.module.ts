import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path:'**', redirectTo: 'main', pathMatch: 'full'}];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {enableTracing:false,useHash:true})
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
