import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnChanges {
  @Input() pageSizes: number;
  @Input() perPage: number;
  @Input() totalItems: number;
  @Input() currentPage: number;
  @Output() currentPageChange = new EventEmitter<number>();
  @Input() totalPages: number;
  @Input() buttonCount: number = 5;
  protected pageList: number [] = [];
  protected minPage: number = 1;
  protected maxPage: number = this.buttonCount;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Calculate minPage and maxPage boundaries based on buttonCount and currentPage
    this.minPage = this.buttonCount * Math.floor((this.currentPage - 1) / this.buttonCount) + 1;
    this.maxPage = Math.min(this.minPage + this.buttonCount - 1, this.totalPages);

    this.pageList = [];
    for (let i = this.minPage; i <= this.maxPage; i++) {
      this.pageList.push(i);
    }
  }

  protected onPageChange(pageIndex: number): void {
    if (pageIndex < 1 || pageIndex > this.totalPages) {
      return;
    }
    this.currentPage = pageIndex;
    this.currentPageChange.emit(pageIndex);
  }
}
