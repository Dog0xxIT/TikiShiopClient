import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./shopping-cart.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ShoppingCartComponent { }
