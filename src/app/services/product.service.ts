import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/api/v1/products";

  constructor(private http: HttpClient) { }

  // Products based on category or all products
  getProducts(categoryFilter?: string): Observable<Product[]>
  {
    let params = new HttpParams();
    if(categoryFilter){
      params=params.append('categories', categoryFilter);
    }
    return this.http.get<Product[]>(this.url, {params:params});
  }

  // Individual product  
  getProduct(productId: string): Observable<Product> 
  {
    return this.http.get<Product>(`${this.url}/${productId}`);
  }

  // Featured products in homepage
  getFeaturedProducts(count: number): Observable<Product[]> 
  {
    return this.http.get<Product[]>(`${this.url}/get/featured/${count}`);
  }

}
