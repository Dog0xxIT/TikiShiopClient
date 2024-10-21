import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { AccountComponent } from './pages/account/account.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OrderOverviewComponent } from './pages/order-overview/order-overview.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: "", component: HomeComponent,
    },
    {
        path: "account", component: AccountComponent,
    },
    {
        path: "checkout", component: CheckoutComponent,
    },
    {
        path: "login", component: LoginComponent,
    },
    {
        path: "not-found", component: NotFoundComponent,
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
        path: "register", component: RegisterComponent,
    },
    {
        path: "cart", component: ShoppingCartComponent,
    },
]
