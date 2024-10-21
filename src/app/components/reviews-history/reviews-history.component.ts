import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reviews-history',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./reviews-history.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ReviewsHistoryComponent { }
