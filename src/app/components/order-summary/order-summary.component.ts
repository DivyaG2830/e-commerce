import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Order, OrderItem } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  totalPrice: number;

  orderItems: OrderItem[] = [];
  userId = '609d65943373711346c5e950';

  constructor(
    private router : Router,
    private CartService: CartService,
    private OrderService: OrderService) { }

  ngOnInit(): void {
    this.getOrderSummary();
    this._getCartItems();
  }

  getOrderSummary()
  {
    this.CartService.cart$.subscribe(cart => {
      this.totalPrice = 0;
      if(cart)
      {
        cart.items.map( item => {
          this.OrderService.getProduct(item.productId).subscribe( product => {
            this.totalPrice += product.price * item.quantity;
          })
        })
      }
    })
  }

  private _getCartItems() {
    const cart: Cart = this.CartService.getCart();
    this.orderItems = cart.items.map((item) => {
      return {
        product: item.productId,
        quantity: item.quantity
      };
    });
  }

  placeOrder()
  {
    const order: Order = {
      orderItems: this.orderItems,
      user: this.userId
    };

    this.OrderService.createOrder(order).subscribe(() =>{
      this.CartService.emptyCart();
      this.router.navigate(['/thankyou']);
    })
    
  }
}
