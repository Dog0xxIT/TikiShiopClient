import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./product-overview.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductOverviewComponent { }
