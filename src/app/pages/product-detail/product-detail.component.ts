import { ReviewsHistoryComponent } from './../../components/reviews-history/reviews-history.component';
import { CommonModule } from '@angular/common';
import { ProductInformationComponent } from '../../components/product-information/product-information.component';
import { ProductReviewsComponent } from '../../components/product-reviews/product-reviews.component';
import { ActivatedRoute } from '@angular/router';
import { GetProductByIdResponse } from '../../models/response-models/catalog/get-product-by-id-response';
import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog/catalog.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductInformationComponent,
    ProductReviewsComponent,
    ReviewsHistoryComponent
  ],
  templateUrl: "./product-detail.component.html",
})

export class ProductDetailComponent implements OnInit {
  protected productId: number;
  protected product!: GetProductByIdResponse;

  constructor(
    private readonly catalogService: CatalogService,
    private readonly route: ActivatedRoute) {
    this.productId = parseInt(route.snapshot.paramMap.get('id') ?? "0");
  }

  ngOnInit(): void {
    this.catalogService.getProductById(this.productId)
      .subscribe(response => this.product = response);
  }
}
