import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/products';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[] =[];
  categories : Category;

  constructor(
    private ProductService : ProductService,
    private CategoryService : CategoryService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      params.categoryid? this.getProducts(params.categoryid):this.getProducts();
    })
    
  }

  getProducts(categoryFilter?: string){
    return this.ProductService.getProducts(categoryFilter).subscribe(response => {this.products = response})
  }
}
