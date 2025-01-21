import { Injectable } from '@angular/core';
import { apiKey, baseUrl } from '../model/apis.const';
import { HttpClient } from '@angular/common/http';
import { Ires } from '../model/moviesArr.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(
    private _http: HttpClient
  ) { }





  fetchAllMovies(pageNum: number) {
    const movieApiUrl: string = `${baseUrl}/movie/popular?api_key=${apiKey}&page=${pageNum.toString()}`;
    return this._http.get<Ires>(movieApiUrl)
  }




}
