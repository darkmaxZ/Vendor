import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs/Rx';
import { ItemFilters, PageFilters, SearchFilter } from '../models/shop-filters';
import { Item } from '../models/item';

@Injectable()
export class SearchService {

  private _itemFilters = new BehaviorSubject<ItemFilters>(new ItemFilters());
  private _pageFilters = new Subject<PageFilters>();

  public itemList: Observable<Item[]>;
  public itemListUpdating: Observable<boolean>;

  constructor(/*private _api: BackendApiService*/) {
      /*this.itemList = Observable.combineLatest(this._itemFilters, this._pageFilters)
          .switchMap(fs => this._api.searchItem(new SearchFilter(fs[0], fs[1])));

      this.itemListUpdating = Observable.merge(
          this.itemList.map(_ => false).catch( (_, o) => Observable.merge(Observable.of(false), o.retry())),
          Observable.combineLatest(this._itemFilters, this._pageFilters).map(_ => true));*/
  }

  public setNewFilters(filters: ItemFilters) {
      this._itemFilters.next(filters);
  }

  public setNewPage(page: PageFilters) {
      this._pageFilters.next(page);
  }
}
