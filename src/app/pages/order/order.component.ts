import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>order works!</p>`,
  styleUrl: './order.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent { }
