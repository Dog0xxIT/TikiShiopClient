export class GetBasketByCustomerIdResponse {
    buyerId: number;
    total: number;
    items: Item[];
}

export class Item {
    id: number;
    unitPrice: number;
    pictureUrl: string;
    quantity: number;
    productId: number;
    productName: string;
    sku: string;
}