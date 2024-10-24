import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBasketByCustomerIdResponse } from '../../models/response-models/basket/get-basket-by-customer-id response';
import { UpdateBasketItemRequest } from '../../models/request-models/basket/update-basket-item-request';


interface BasketServiceInterface {
  getBasket(): Observable<GetBasketByCustomerIdResponse>
  deleteBasketItem(basketItemId: number): Observable<any>
  updateBasketItem(request: UpdateBasketItemRequest): Observable<any>
}

@Injectable({
  providedIn: 'root'
})

export class BasketService implements BasketServiceInterface {
  private baseUrl = "https://localhost:7014/api/v1/baskets";

  constructor(private readonly http: HttpClient) { }

  public getBasket(): Observable<GetBasketByCustomerIdResponse> {
    return this.http.get<GetBasketByCustomerIdResponse>(this.baseUrl);
  }

  public deleteBasketItem(basketItemId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${basketItemId}`);
  }

  public updateBasketItem(request: UpdateBasketItemRequest): Observable<any> {
    return this.http.patch(this.baseUrl, request);
  }
}
