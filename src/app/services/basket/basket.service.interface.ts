import { Observable } from "rxjs"
import { GetBasketByCustomerIdResponse } from "../../models/response-models/basket/get-basket-by-customer-id response"
import { UpdateBasketItemRequest } from "../../models/request-models/basket/update-basket-item-request"

export interface BasketServiceInterface {
    getBasket(): Observable<GetBasketByCustomerIdResponse>
    deleteBasketItem(basketItemId: number): Observable<any>
    updateBasketItem(request: UpdateBasketItemRequest): Observable<any>
}