import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {
  
  featuredProducts : Product[] = [];

  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
    this.ProductService.getFeaturedProducts(3).subscribe(response => {this.featuredProducts = response})
  }

}