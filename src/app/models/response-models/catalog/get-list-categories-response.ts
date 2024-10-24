export interface GetListCategoriesResponse {
    id: number;
    name: string;
    thumbnailUrl: string;
    parentId: number | null;
    hasChild: boolean;
    child: GetListCategoriesResponse[];
}