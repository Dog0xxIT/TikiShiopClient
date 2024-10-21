import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-information',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./product-information.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductInformationComponent { }
