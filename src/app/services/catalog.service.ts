import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/responseModels/catalog/product.model';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../models/responseModels/pagination-response.model';
import { Brand } from '../models/responseModels/catalog/brand.model';
import { Category } from '../models/responseModels/catalog/category.model';

@Injectable({
  providedIn: 'root'
})

export class CatalogService {
  private baseUrl = "https://localhost:7014/api/v1/catalog";

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(`${this.baseUrl}/products`);
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  public getBrands(): Observable<PaginationResponse<Brand>> {
    return this.http.get<PaginationResponse<Brand>>(`${this.baseUrl}/brands`);
  }

  public getCategories(): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/categories`);
  }

  public getCategoriesHierarchy(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories/hierarchy`);
  }
}
