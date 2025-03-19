import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  quantity = 1;

  constructor(
    private ProductService : ProductService,
    private CartService: CartService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.productid)
      {
        this.ProductService.getProduct(params.productid).subscribe(response => {this.product = response})
      }
    })
  }

  addProductToCart()
  {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity
    };

    this.CartService.setCartItem(cartItem);
  }
}
