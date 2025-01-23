import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Loader3Service {

  constructor() { }

  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  show() {
    this._isLoading.next(true);
  }

  hide() {
    this._isLoading.next(false);
  }

}
