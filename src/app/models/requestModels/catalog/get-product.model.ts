import { PaginationRequest } from "../paging.model";

export interface GetListProductRequest extends PaginationRequest {
    minPrice: number | null;
    maxPrice: number | null;
    brands: string | null;
    keyword: string | null;
    rating: number | null;
    categories: string | null;
    sortBy: SortBy;
}

export enum SortBy {
    Id,
    Price,
    DateModified
}