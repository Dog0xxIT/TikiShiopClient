export interface GetListProductsResponse {
    id: number;
    name: string;
    price: number;
    discount: number;
    ratingAverage: number;
    reviewCount: number;
    thumbnailUrl: string;
    categoryId: number;
    brandId: number;
    totalBought: number;
    sku: string;
    shortDescription: string;
    description: string;
    brand: BrandDto;
    category: CategoryDto;
}

export interface BrandDto {
    id: number;
    name: string;
    slug: string;
}

export interface CategoryDto {
    id: number;
    name: string;
    thumbnailUrl: string;
    parentId: number | null;
    parent: CategoryDto | null;
    hasChild: boolean | null;
    childs: CategoryDto[] | null;
}