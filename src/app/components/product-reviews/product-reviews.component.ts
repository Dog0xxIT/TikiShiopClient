import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./product-reviews.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductReviewsComponent { }
