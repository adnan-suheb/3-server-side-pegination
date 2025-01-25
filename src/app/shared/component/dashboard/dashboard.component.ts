import { Component, OnInit } from '@angular/core';
import { Imovies, Ires } from '../../model/moviesArr.interface';
import { Observable } from 'rxjs';
import { TmdbService } from '../../service/tmdb.service';
import { PageEvent } from '@angular/material/paginator';
import { Loader3Service } from '../../service/loader3.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  firstPage: number = 1;
  moviesArr: Imovies[] = [];
  totalPages: number = 0;
  moviesArr$!: Observable<any>;


  loadedMovies: { [key: number]: boolean } = {};

  constructor(
    private _tmdbService: TmdbService,
    private _loaderService: Loader3Service
  ) { }

  ngOnInit(): void {
    // this._tmdbService.fetchAllMovies(this.firstPage).subscribe(res => {
    //   console.log(res);
    // })
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
    this.firstPage = eve.pageIndex + 1;
    this.fetchMovies(this.firstPage);
  }

  goToPageInput() {
    if (this.firstPage >= 1 && this.firstPage <= this.totalPages) {
      this.fetchMovies(this.firstPage);
      this.totalPages = this.firstPage;
    }
  }

  goToSinglePage(obj: Imovies) {
    this._tmdbService._singleMovie$.next(obj)
  }

}
