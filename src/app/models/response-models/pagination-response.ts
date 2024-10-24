import { PaginationMeta } from "./pagination-meta";

export class PaginationResponse<T> {
    public meta: PaginationMeta;
    public data: T[];
}
