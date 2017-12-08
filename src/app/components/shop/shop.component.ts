import { Component, OnInit, ElementRef, AfterViewChecked, AfterViewInit, OnDestroy  } from '@angular/core';
import { PageFilters } from '../../models/shop-filters';
import { SearchService } from '../../services/search.service'; 
import { Item } from '../../models/item';
import { Observable, Subscription } from 'rxjs/Rx';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'vendor-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public pageSizeOptions: number[] = [5, 10, 20, 50];
  public pageSize = this.pageSizeOptions[1];
  public pageLength = this.pageSize * 2;
  public pageIndex = 0;

  public itemList: Item[] = [];
  public loading: Boolean = false;

  private _subscriptions: Subscription[] = [];

  constructor(private _elementRef: ElementRef, private _search: SearchService) {
  }

  ngOnInit() {
    this.itemList = [ new Item(1, "CTX3030", "15000", "5", "Metal detector", "assets/images/ctx3030.jpg"),
                       new Item(2, "XP GoldMaxx Power", "25000", "5", "Metal detector", "assets/images/goldmaxx-power-lg.jpg"),
                       new Item(3, "St Garret", "8000", "10", "Pinpointer", "assets/images/st-garrett.jpg")
    ];
    const page = new PageFilters();
    page.pageNumber = this.pageIndex;
    page.pageSize = this.pageSize;

    const itemSubs = this._search.itemList
        .catch((e, origin) => {
            alert(`Не удалось загрузить список видео по причине: ${JSON.stringify(e, null, 4 )}`);
            return Observable.merge(Observable.of([]), origin.retry());
        })
        .subscribe(m => {
            this.itemList = m;
            this.updatePaginatorFields();
        });
    const loadingSubs = this._search.itemListUpdating.subscribe(l => this.loading = l);

    this._search.setNewPage(page);

    this._subscriptions.push(itemSubs, loadingSubs);
  }

  ngOnDestroy() {
      this._subscriptions.forEach(s => s.unsubscribe());
  }

  handlePageEvent(event: PageEvent) {
      const page = new PageFilters();
      page.pageNumber = event.pageIndex;
      page.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;

      this._search.setNewPage(page);
  }

  ngAfterViewInit() {
      this._elementRef.nativeElement.querySelector('.mat-paginator-page-size-label').innerHTML = 'Показывать:';

      const elem = this._elementRef.nativeElement.querySelector('.mat-paginator-range-label');
      elem.style.display = 'none';

      const parent = elem.parentNode;
      const newelem = document.createElement('div');
      newelem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.indexOf('o'));
      newelem.className = elem.className + ' fake';

      parent.insertBefore(newelem, elem);
  }

  ngAfterViewChecked() {
      if (!this.loading) {
          const elem = this._elementRef.nativeElement.querySelector('.mat-paginator-range-label:not(.fake)');
          const text = elem.innerHTML.substring(0, elem.innerHTML.indexOf('o'));

          this._elementRef.nativeElement.querySelector('.fake').innerHTML = text;
      }
  }

  updatePaginatorFields() {
      this.pageLength = (this.itemList.length < this.pageSize)
          ? this.itemList.length + this.pageIndex * this.pageSize
          : (this.pageIndex + 2) * this.pageSize;
  }

}
