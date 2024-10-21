import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./payment.component.html",

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent { }
