import { ProductChoice } from '@/lib/types/productType'
/** GET / POST / PATCH / DELETE 購物車 → Cart */
export interface Cart {
  restaurantId: number | null;
  items: CartItem[];
  totalQuantity: number;
  subtotal: number;
}

export interface CartItem {
  id: number;
  productId: number;
  restaurantId: number;
  name: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
  stock: number;
  isAvailable: boolean;
  options: CartLineOption[];
}

export interface CartLineOption {
  optionId: number;
  optionName: string;
  choices: ProductChoice[];
}