import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CartService } from './services/cart.service';
import { FormsModule } from '@angular/forms';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    OrderSummaryComponent,
    FeaturedProductComponent,
    CategoryComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductItemComponent,
    CartComponent,
    GalleryComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor( private cartService: CartService) 
  {
    cartService.initCartLocalStorage();
  }
}
