import { Observable } from "rxjs";
import { GetListBrandsResponse } from "../../models/response-models/catalog/get-list-brands-response";
import { GetListCategoriesResponse } from "../../models/response-models/catalog/get-list-categories-response";
import { PaginationResponse } from "../../models/response-models/pagination-response";
import { PaginationRequest } from "../../models/request-models/paging-request";
import { GetProductByIdResponse } from "../../models/response-models/catalog/get-product-by-id-response";
import { GetListProductsResponse } from "../../models/response-models/catalog/get-list-products-response";

export interface CatalogServiceInterface {
    getProducts(): Observable<PaginationResponse<GetListProductsResponse>>;
    getProductById(id: number): Observable<GetProductByIdResponse>;
    getBrands(): Observable<PaginationResponse<GetListBrandsResponse>>;
    getCategories(paginationRequest?: PaginationRequest): Observable<PaginationResponse<GetListCategoriesResponse>>;
    getCategoriesHierarchy(): Observable<GetListCategoriesResponse[]>;
}
