import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./checkout.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent { }
