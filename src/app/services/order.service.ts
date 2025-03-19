import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>("http://localhost:3000/api/v1/orders", order);
  }

  // to stop circular dependency this method is used in this service.
  getProduct(productId: string): Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/v1/products/"+ productId);
  }
}
