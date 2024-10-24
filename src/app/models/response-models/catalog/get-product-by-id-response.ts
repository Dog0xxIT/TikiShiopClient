export interface GetProductByIdResponse {
    id: number;
    name: string;
    price: number;
    discount: number;
    ratingAverage: number;
    reviewCount: number;
    thumbnailUrl: string;
    totalBought: number;
    sku: string;
    shortDescription: string;
    description: string;
    brand: BrandDto;
    category: CategoryDto;
    option1: ConfigOptionDto | null;
    option2: ConfigOptionDto | null;
    productSkus: ProductSkuDto[];
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

export interface ConfigOptionDto {
    type: string;
    code: string;
    value: string;
}

export interface ProductSkuDto {
    id: number;
    name: string;
    sku: string;
    price: number;
    quantity: number;
    option1: ConfigOptionDto | null;
    option2: ConfigOptionDto | null;
}