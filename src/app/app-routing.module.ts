import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import path from 'path';

const routes: Routes = [

  {
    path:'home',
    component:DashboardComponent
  },
  {
    path:"",
    redirectTo:'home',
    pathMatch:"full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
