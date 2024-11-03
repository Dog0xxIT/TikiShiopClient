import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Injectable, OnInit} from '@angular/core';
import {PaginationResponse} from '../../models/response-models/pagination-response';
import {SpinnerComponent} from "../../components/spinner/spinner.component";
import {GetListCategoriesResponse} from '../../models/response-models/catalog/get-list-categories-response';
import {GetListBrandsResponse} from '../../models/response-models/catalog/get-list-brands-response';
import {GetListProductsResponse} from '../../models/response-models/catalog/get-list-products-response';
import {CatalogService} from '../../services/catalog/catalog.service';
import {SlideBarComponent} from '../../components/slide-bar/slide-bar.component';
import {BreadcrumbsComponent} from '../../components/breadcrumbs/breadcrumb.component';
import {BreadcrumbItem} from '../../components/breadcrumbs/breadcum-item';
import {FilterModalComponent} from '../../components/filter-modal/filter-modal.component';
import {PaginationComponent} from '../../components/pagination/pagination.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent,
    SlideBarComponent,
    BreadcrumbsComponent,
    FilterModalComponent,
    PaginationComponent
  ],
  templateUrl: './products.component.html',
})

export class ProductsComponent implements OnInit {
  protected breadcrumbItems: BreadcrumbItem[] = [];
  protected productsPagingResponse: PaginationResponse<GetListProductsResponse> = new PaginationResponse<GetListProductsResponse>();
  protected brands: GetListBrandsResponse[] = [];
  protected categories: GetListCategoriesResponse[] = [];

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit(): void {
    this.catalogService.getProducts({limit: 40, page: 1, sortDescending: false})
      .subscribe(response => this.productsPagingResponse = response);

    this.catalogService.getCategories({limit: 50, page: 1, sortDescending: false})
      .subscribe(response => this.categories = response.data);

    this.catalogService.getBrands()
      .subscribe(response => this.brands = response.data);

    this.breadcrumbItems = [
      new BreadcrumbItem("Home", "/", false),
      new BreadcrumbItem("Products", "/products", false),
      new BreadcrumbItem("Sex", "/", true),
    ]
  }

  protected onChangeCurrentPage(pageIndex: number): void {
    this.catalogService.getProducts({limit: 40, page: pageIndex, sortDescending: false})
      .subscribe(response => this.productsPagingResponse = response);
  }
}
