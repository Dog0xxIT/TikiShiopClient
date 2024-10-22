import { ReviewsHistoryComponent } from './../../components/reviews-history/reviews-history.component';
import { ProductOverviewComponent } from './../../components/product-overview/product-overview.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductInformationComponent } from '../../components/product-information/product-information.component';
import { ProductReviewsComponent } from '../../components/product-reviews/product-reviews.component';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../models/responseModels/catalog/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductOverviewComponent,
    ProductInformationComponent,
    ProductReviewsComponent,
    ReviewsHistoryComponent
  ],
  templateUrl: "./product-detail.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductDetailComponent implements OnInit {
  protected productId: number;
  protected productResponse!: Product;

  constructor(
    private readonly catalogService: CatalogService,
    private readonly route: ActivatedRoute) {
    this.productId = parseInt(route.snapshot.paramMap.get('id') ?? "0");
  }

  ngOnInit(): void {
    this.catalogService.getProductById(this.productId)
      .subscribe(response => response = this.productResponse);
  }
}
