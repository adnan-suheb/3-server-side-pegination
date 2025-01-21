import { Component, OnInit } from '@angular/core';
import { TmdbService } from './shared/service/tmdb.service';
import { Observable } from 'rxjs';
import { Imovies, Ires } from './shared/model/moviesArr.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  firstPage: number = 1;

  moviesArr: Imovies[] = [];
  totalPages: number = 0;
  moviesArr$!: Observable<any>;

  constructor(
    private _tmdbService: TmdbService
  ) { }

  ngOnInit(): void {
    this._tmdbService.fetchAllMovies(this.firstPage).subscribe(res => {
      console.log(res);
    })
    this.fetchMovies(this.firstPage);



  }


  fetchMovies(pageNum: number) {
    this._tmdbService.fetchAllMovies(pageNum).subscribe((res: Ires) => {
      if (res) {
        this.moviesArr = res.results;
        this.totalPages = res.total_pages;
      }
    })
  }

  goToPage(eve: PageEvent) {
    this.firstPage  =eve.pageIndex+1;
    this.fetchMovies(this.firstPage);
  }

  goToPageInput() {
    if (this.firstPage >= 1 && this.firstPage <= this.totalPages) {
      this.fetchMovies(this.firstPage);
      this.totalPages = this.firstPage;
    }
  }


}
