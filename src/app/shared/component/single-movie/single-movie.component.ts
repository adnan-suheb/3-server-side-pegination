import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../service/tmdb.service';
import { Imovies } from '../../model/moviesArr.interface';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Routes } from '@angular/router';
import { IsingleMovieObj } from '../../model/singleMovieObj.interface';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.scss'
})
export class SingleMovieComponent implements OnInit {


  movieObj!: Imovies;


  loadedMovies: { [key: number]: boolean } = {};


  constructor(
    private _tmdbService: TmdbService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getMovieObj();

  }

  getMovieObj() {

    this._tmdbService._singleMovie$.subscribe((res: Imovies) => {
      if (res) {
        this.movieObj = res;
      } else {
        let id = this._route.snapshot.params['id'];
        this._tmdbService.getMovieById(id).pipe(
          map((res: IsingleMovieObj) => ({ ...res, genre_ids: res.genres.map(ele => ele.id) }))
        ).subscribe(res => {
          this.movieObj = res;
        })

      }
    })
  }







  genreIds: { [key: number]: string } = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
    10759: 'Action & Adventure',
    10762: 'Kids',
    10763: 'News',
    10764: 'Reality',
    10765: 'Sci-Fi & Fantasy',
    10766: 'Soap',
    10767: 'Talk',
    10768: 'War & Politics'
  };

  getGenreNames(ids: number[]): string {
    return ids.map(id => this.genreIds[id] || 'Unknown').join(', ');
  }



}
