import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCartComponent } from "../../components/product-cart/product-cart.component";
import { CategoriesComponent } from '../../components/categories/categories.component';
import { ProductsComponent } from '../products/products.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductCartComponent,
    CategoriesComponent,
    ProductsComponent,
    HeroSectionComponent
  ],
  templateUrl: "./home.component.html"
  , changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent { }
