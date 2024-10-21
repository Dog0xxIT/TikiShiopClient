import { ReviewsHistoryComponent } from './../../components/reviews-history/reviews-history.component';
import { ProductOverviewComponent } from './../../components/product-overview/product-overview.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductInformationComponent } from '../../components/product-information/product-information.component';
import { ProductReviewsComponent } from '../../components/product-reviews/product-reviews.component';

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

export class ProductDetailComponent { }
