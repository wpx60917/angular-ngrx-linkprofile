import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const routes:Routes =[
  {
    path: 'main',
    component:MainComponent,
    children:[
      {
        path:'',
        redirectTo: 'settings',
        pathMatch: 'full',
      },
      {
        path:'settings',
        loadChildren:()=> import ('../settings/settings.module').then((m)=>m.SettingsModule),
      },
      {
        path:'templates',
        loadChildren:()=> import ('../templates/templates.module').then((m)=>m.TemplatesModule),
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MainRoutingModule { }
