import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-quickview',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./product-quickview.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductQuickviewComponent { }
