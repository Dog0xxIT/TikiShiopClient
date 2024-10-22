import { CatalogService } from './../../services/catalog.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injectable, OnInit } from '@angular/core';
import { PaginationResponse } from '../../models/responseModels/pagination-response.model';
import { Product } from '../../models/responseModels/catalog/product.model';
import { SpinnerComponent } from "../../components/spinner/spinner.component";
import { Brand } from '../../models/responseModels/catalog/brand.model';
import { Category } from '../../models/responseModels/catalog/category.model';

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
  styleUrl: './products.component.css',
})

export class ProductsComponent implements OnInit {

  protected getListResponse!: PaginationResponse<Product>;
  protected brands: Brand[] = [];
  protected categories: Category[] = [];

  constructor(private catalogService: CatalogService) {

  }

  ngOnInit(): void {
    this.catalogService.getProducts()
      .subscribe(response => this.getListResponse = response);

    this.catalogService.getCategoriesHierarchy()
      .subscribe(response => this.categories = response);

    // this.catalogService.getBrands()
    //   .subscribe(response => this.brands = response.data);
  }
}
