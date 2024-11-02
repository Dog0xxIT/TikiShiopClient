import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {ProductsComponent} from './pages/products/products.component';
import {AccountComponent} from './pages/account/account.component';
import {OrderOverviewComponent} from './pages/order-overview/order-overview.component';
import {OrderSummaryComponent} from './pages/order-summary/order-summary.component';
import {OrderTrackingComponent} from './pages/order-tracking/order-tracking.component';
import {PaymentComponent} from './pages/payment/payment.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import {MainLayout} from './layouts/main-layout/main-layout';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {EmptyLayout} from './layouts/empty-layout/empty-layout';

export const routes: Routes = [
  {
    path: "products/:id", component: ProductDetailComponent,
  },
  {
    path: "account", component: AccountComponent,
  },
  {
    path: "checkout", component: CheckoutComponent,
  },
  {
    path: "order", component: OrderOverviewComponent,
  },
  {
    path: "order-summary", component: OrderSummaryComponent,
  },
  {
    path: "tracking", component: OrderTrackingComponent,
  },
  {
    path: "payment", component: PaymentComponent,
  },
  {
    path: "product-detail", component: ProductDetailComponent,
  },
  {
    path: "products", component: ProductsComponent,
  },
  {
    path: "cart", component: ShoppingCartComponent,
  },
  {
    path: "", component: HomeComponent,
  },
  {
    path: "login", component: LoginComponent,
  },
  {
    path: "register", component: RegisterComponent,
  },
  {
    path: "**", component: PageNotFoundComponent,
  }
]
