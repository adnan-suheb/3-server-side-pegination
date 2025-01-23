import { Component, OnInit } from '@angular/core';
import { TmdbService } from './shared/service/tmdb.service';
import { Observable } from 'rxjs';
import { Imovies, Ires } from './shared/model/moviesArr.interface';
import { PageEvent } from '@angular/material/paginator';
import { Loader3Service } from './shared/service/loader3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private _loaderService:Loader3Service
  ){

  }

  isLoading = this._loaderService.isLoading$;



}
