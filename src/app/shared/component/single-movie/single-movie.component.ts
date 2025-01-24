import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../service/tmdb.service';
import { Imovies } from '../../model/moviesArr.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.scss'
})
export class SingleMovieComponent implements OnInit {


  movieObj!: Imovies

  movieObj$!: Observable<any>;

  loadedMovies: { [key: number]: boolean } = {};


  constructor(
    private _tmdbService: TmdbService
  ) { }

  ngOnInit(): void {

    this.movieObj$ = this._tmdbService._singleMovie$;

    this._tmdbService._singleMovie$.subscribe((res: Imovies) => {
      if (res) {
        console.log(res);

        this.movieObj = res;

      }
    })

  }



}
