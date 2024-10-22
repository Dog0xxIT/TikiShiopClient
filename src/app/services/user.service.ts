import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/responseModels/catalog/product.model';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../models/responseModels/pagination-response.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = "https://localhost:7014/api/v1/";

  constructor(private readonly http: HttpClient) { }

  public login(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(this.baseUrl);
  }

  public externalLogin(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(this.baseUrl);
  }

  public logout(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(this.baseUrl);
  }

  public refreshToken(): Observable<PaginationResponse<Product>> {
    return this.http.get<PaginationResponse<Product>>(this.baseUrl);
  }

  public manageInfo(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
