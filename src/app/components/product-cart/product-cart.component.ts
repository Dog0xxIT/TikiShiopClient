import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./product-cart.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCartComponent { }
