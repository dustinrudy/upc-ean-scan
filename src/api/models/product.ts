export interface Offers {
    merchant: string;
    domain: string;
    title: string;
    currency: string;
    list_price: number;
    price: number;
    shipping: string;
    condition: string;
    availability: string;
    link: string;
    updated_t: number;
  }
  
  export interface Product {
    _id: string;
    ean: string;
    title: string;
    upc: string;
    description: string;
    brand: string;
    model: string;
    size: string;
    dimension: string;
    color: string;
    weight: string;
    category: string;
    currency: string;
    lowest_recorded_price: number;
    highest_recorded_price: number;
    images: string[];
    offers: Offers[];
    asin?: string;
    elid?: string;
    gtin?: string;
    createdAt: Date,
    updatedAt: Date,
  }