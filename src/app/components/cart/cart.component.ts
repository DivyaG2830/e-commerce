import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemDetailed } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;
  
  constructor(
    private router : Router,
    private CartService : CartService,
    private OrderService : OrderService

  ) { }

  ngOnInit(): void {
    this.getCartDetails();
  }
  backToShop() {
    this.router.navigate(['/products']);
  }

  
  private getCartDetails() {
    this.CartService.cart$.subscribe((respCart) => {
      this.cartItemsDetailed = [];
      this.cartCount = respCart?.items.length ?? 0;
      respCart.items.forEach((cartItem) => {
        this.OrderService.getProduct(cartItem.productId).subscribe((respProduct) => {
          this.cartItemsDetailed.push({
            product: respProduct,
            quantity: cartItem.quantity
          });
        });
      });
    });
  }

  deleteCartItem(cartItem: CartItemDetailed) {
    this.CartService.deleteCartItem(cartItem.product.id);
  }

  updateCartItemQuantity(event, cartItem: CartItemDetailed) {
    this.CartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: event.value
      },
      true
    );
  }
}
