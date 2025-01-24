import { Injectable } from '@angular/core';
import { apiKey, baseUrl } from '../model/apis.const';
import { HttpClient } from '@angular/common/http';
import { Ires } from '../model/moviesArr.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {


  public _singleMovie$: BehaviorSubject<any> = new BehaviorSubject(null);


  constructor(
    private _http: HttpClient
  ) { }


  fetchAllMovies(pageNum: number) {
    const movieApiUrl: string = `${baseUrl}/movie/popular?api_key=${apiKey}&page=${pageNum.toString()}`;

    return this._http.get<Ires>(movieApiUrl)

  }





}
