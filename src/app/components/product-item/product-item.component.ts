import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product : Product;
  // quantity : number;
  
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart()
  {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1
    };

    this.CartService.setCartItem(cartItem);
  }
}
