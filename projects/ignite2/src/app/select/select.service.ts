import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private _selections = new Subject<any>();

  selectItem(id: string, item: any) {
    this._selections.next({id, option: item});
  }

  get selections () {
    return this._selections.asObservable();
  }
}