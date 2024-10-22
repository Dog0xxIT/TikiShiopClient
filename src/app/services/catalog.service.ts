import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/responseModels/catalog/product.model';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../models/responseModels/pagination-response.model';

@Injectable({
  providedIn: 'root'
})

export class CatalogService {
  private baseUrl = "https://localhost:7014/api/v1/catalog/products";

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(this.baseUrl);
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  public getBrands(): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}`);
  }

  public getCategories(): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}`);
  }

  public getCategoriesHierarchy(): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}`);
  }
}
