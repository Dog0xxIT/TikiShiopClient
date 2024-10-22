import { PaginationMeta } from "./pagination-meta.model";

export interface PaginationResponse<T> {
    meta: PaginationMeta,
    data: T[]
}