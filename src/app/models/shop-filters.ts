export class ItemFilters {
    public from: number | null;
    public to: number | null;
    public categories: string[];
}

export class PageFilters {
    public pageNumber: number;
    public pageSize: number;
}

export class SearchFilter {
    public media: ItemFilters;
    public page: PageFilters;

    constructor(mediaFilter: ItemFilters, pageFilter: PageFilters) {
        this.media = mediaFilter;
        this.page = pageFilter;
    }
}