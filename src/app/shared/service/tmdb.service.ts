import { Injectable } from '@angular/core';
import { apiKey, baseUrl } from '../model/apis.const';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Imovies, Ires } from '../model/moviesArr.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IsingleMovieObj } from '../model/singleMovieObj.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiUrl = 'https://api.themoviedb.org/3';

  public _singleMovie$: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  constructor(
    private _http: HttpClient
  ) { }


  fetchAllMovies(pageNum: number) {
    const params = new HttpParams()
      .set("api_key", apiKey)
      .set("page", pageNum.toString());

    // const movieApiUrl: string = `${baseUrl}/movie/popular?api_key=${apiKey}&page=${pageNum.toString()}`;

    return this._http.get<Ires>(`${baseUrl}/movie/popular`, { params })

  }



  getMovieById(movieId: string): Observable<IsingleMovieObj> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    return this._http.get<IsingleMovieObj>(url);
  }





}
