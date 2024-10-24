import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injectable, OnInit } from '@angular/core';
import { PaginationResponse } from '../../models/response-models/pagination-response';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { GetListCategoriesResponse } from '../../models/response-models/catalog/get-list-categories-response';
import { GetListBrandsResponse } from '../../models/response-models/catalog/get-list-brands-response';
import { GetListProductsResponse } from '../../models/response-models/catalog/get-list-products-response';
import { CatalogService } from '../../services/catalog/catalog.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent
  ],
  templateUrl: './products.component.html',
})

export class ProductsComponent implements OnInit {

  protected productsPagingReponse!: PaginationResponse<GetListProductsResponse>;
  protected brands: GetListBrandsResponse[] = [];
  protected categories: GetListCategoriesResponse[] = [];

  constructor(private catalogService: CatalogService) {

  }

  ngOnInit(): void {
    this.catalogService.getProducts()
      .subscribe(response => this.productsPagingReponse = response);

    this.catalogService.getCategories({ limit: 50, page: 1, sortDescending: false })
      .subscribe(response => this.categories = response.data);

    this.catalogService.getBrands()
      .subscribe(response => this.brands = response.data);
  }
}
