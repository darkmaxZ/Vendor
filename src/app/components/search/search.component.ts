import { Component, OnInit } from '@angular/core';
import { ItemFilters } from '../../models/shop-filters';
import { Category } from '../../models/category';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'vendor-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public categories: Category[] = [];

  public itemFilters: ItemFilters = new ItemFilters();

  constructor(private _search: SearchService) { }

  ngOnInit() {
      this.getCategories();
  }

  private getCategories() {
      this.categories = [
        new Category(1, "Metal detector"),
        new Category(2, "Pinpointer")
      ];
  }

  private search() {
      this.setArrayNull(this.itemFilters.categories);
      this._search.setNewFilters(this.itemFilters);
  }

  private setArrayNull(array: any[]) {
      if (array && !array.length) {
          array = null;
      }
  }

}
