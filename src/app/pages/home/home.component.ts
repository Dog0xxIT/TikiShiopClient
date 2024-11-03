import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCartComponent} from '../../components/product-cart/product-cart.component';
import {CategoriesComponent} from '../../components/categories/categories.component';
import {ProductsComponent} from '../products/products.component';
import {HeroSectionComponent} from '../../components/hero-section/hero-section.component';
import {MainLayout} from '../../layouts/main-layout/main-layout';
import {SlideBarComponent} from '../../components/slide-bar/slide-bar.component';

@Component({
  imports: [
    CommonModule,
    ProductCartComponent,
    CategoriesComponent,
    ProductsComponent,
    HeroSectionComponent,
    MainLayout,
  ],
  selector: 'app-home',
  standalone: true,
  templateUrl: "./home.component.html",
})

export class HomeComponent { }
