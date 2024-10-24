import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListProductsResponse } from '../../models/response-models/catalog/get-list-products-response';
import { GetProductByIdResponse } from '../../models/response-models/catalog/get-product-by-id-response';
import { PaginationRequest } from '../../models/request-models/paging-request';
import { GetListCategoriesResponse } from '../../models/response-models/catalog/get-list-categories-response';
import { PaginationResponse } from '../../models/response-models/pagination-response';
import { GetListBrandsResponse } from '../../models/response-models/catalog/get-list-brands-response';


export interface CatalogServiceInterface {
  getProducts(): Observable<PaginationResponse<GetListProductsResponse>>;
  getProductById(id: number): Observable<GetProductByIdResponse>;
  getBrands(): Observable<PaginationResponse<GetListBrandsResponse>>;
  getCategories(paginationRequest?: PaginationRequest): Observable<PaginationResponse<GetListCategoriesResponse>>;
  getCategoriesHierarchy(): Observable<GetListCategoriesResponse[]>;
}

@Injectable({
  providedIn: 'root'
})

export class CatalogService {
  private baseUrl = "https://localhost:7014/api/v1/catalog";

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<PaginationResponse<GetListProductsResponse>> {
    return this.http.get<PaginationResponse<GetListProductsResponse>>(`${this.baseUrl}/products`);
  }

  public getProductById(id: number): Observable<GetProductByIdResponse> {
    return this.http.get<GetProductByIdResponse>(`${this.baseUrl}/products/${id}`);
  }

  public getBrands(): Observable<PaginationResponse<GetListBrandsResponse>> {
    return this.http.get<PaginationResponse<GetListBrandsResponse>>(`${this.baseUrl}/brands`);
  }

  public getCategories(paginationRequest?: PaginationRequest): Observable<PaginationResponse<GetListCategoriesResponse>> {
    return this.http.get<PaginationResponse<GetListCategoriesResponse>>(`${this.baseUrl}/categories`,
      {
        params: paginationRequest != null ? {
          limit: paginationRequest.limit,
          page: paginationRequest.page,
          sortDescending: paginationRequest.sortDescending
        } : undefined
      }
    );
  }

  public getCategoriesHierarchy(): Observable<GetListCategoriesResponse[]> {
    return this.http.get<GetListCategoriesResponse[]>(`${this.baseUrl} / categories / hierarchy`);
  }
}
