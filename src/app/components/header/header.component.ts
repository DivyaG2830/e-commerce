import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount = 0;

  constructor(private CartService : CartService) { }

  ngOnInit(): void {
    this.CartService.cart$.subscribe( cart => {
      this.cartCount = cart?.items.length ?? 0;
    })
  }

}
