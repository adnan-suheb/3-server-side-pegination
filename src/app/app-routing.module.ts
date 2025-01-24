import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import path from 'path';
import { SingleMovieComponent } from './shared/component/single-movie/single-movie.component';

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

  {
    path:'movieInfo',
    component:SingleMovieComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
