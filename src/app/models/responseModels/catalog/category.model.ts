export interface Category {
    id: number;
    name: string;
    thumbnailUrl: string;
    parentId: number | null;
    hasChild: boolean;
    childs: Category[];
}