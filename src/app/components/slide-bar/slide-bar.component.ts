import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ItemSidebar} from './item-sidebar';
import {CatalogService} from '../../services/catalog/catalog.service';
import {GetListCategoriesResponse} from '../../models/response-models/catalog/get-list-categories-response';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './slide-bar.component.html',
})
export class SlideBarComponent implements OnInit {
  protected itemSidebars: ItemSidebar[] = [];

  constructor(private catalogService: CatalogService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.catalogService.getCategoriesHierarchy().subscribe(res => {
      this.itemSidebars = this.buildItemSidebar(res);
    });
  }

  private buildItemSidebar(categories: GetListCategoriesResponse[]): ItemSidebar[] {
    return categories.map(category => {
      return new ItemSidebar(
        category.id,
        category.thumbnailUrl,
        category.name,
        category.name,
        this.buildItemSidebar(category.child || [])  // Recursively populate subcategories
      );
    });
  }

  protected getSanitizerUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
