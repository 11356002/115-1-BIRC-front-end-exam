/** GET /api/products/:productId → Product */
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  isAvailable: boolean;
  options: ProductOption[];
}

export interface ProductOption {
  id: number;
  name: string;
  required: boolean;
  multiple: boolean;
  choices: ProductChoice[];
}

export interface ProductChoice {
  id: number;
  name: string;
  price: number;
}