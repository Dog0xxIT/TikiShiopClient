import { PaginationRequest } from "../paging-request";

export class GetListProductRequest extends PaginationRequest {
    public minPrice?: number;
    public maxPrice?: number;
    public brands?: string;
    public keyword?: string;
    public rating?: number;
    public categories?: string;
    public sortBy?: SortBy;
}

export enum SortBy {
    Id,
    Price,
    DateModified
}