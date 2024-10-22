import { CatalogService } from './../../services/catalog.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injectable, OnInit } from '@angular/core';
import { PaginationResponse } from '../../models/responseModels/pagination-response.model';
import { Product } from '../../models/responseModels/catalog/product.model';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})

export class ProductsComponent implements OnInit {

  protected getListResponse: PaginationResponse<Product> = {
    data: [],
    meta: {
      count: 0,
      currentPage: 0,
      perPage: 0,
      total: 0,
      totalPages: 0
    }
  };

  constructor(private catalogService: CatalogService) {

  }

  ngOnInit(): void {
    this.catalogService.getProducts()
      .subscribe(response => this.getListResponse = response);
  }
}
