import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/responseModels/catalog/product.model';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../models/responseModels/pagination-response.model';

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  private baseUrl = "https://localhost:7014/api/v1/baskets";

  constructor(private readonly http: HttpClient) { }

  public getBasket(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(this.baseUrl);
  }

  public deleteBasketItem(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(this.baseUrl);
  }

  public updateBasketItem(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(this.baseUrl);
  }
}
