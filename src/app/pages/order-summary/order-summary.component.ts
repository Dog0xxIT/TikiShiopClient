import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './order-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent { }
