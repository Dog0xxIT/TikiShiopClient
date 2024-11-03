import { PaginationMeta } from "./pagination-meta";

export class PaginationResponse<T> {
    public meta: PaginationMeta = new PaginationMeta();
    public data: T[];
}
