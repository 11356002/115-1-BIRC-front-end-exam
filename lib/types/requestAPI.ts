/** POST /api/cart/items */
export interface AddCartItemRequest {
  productId: number;
  quantity: number; // 1–99
  options?: SelectedOption[];
}

/** PATCH /api/cart/items/:itemId */
export interface UpdateCartItemRequest {
  quantity: number; // 1–99
}

/** POST /api/coupons/validate */
export interface ValidateCouponRequest {
  code: string;
  restaurantId: number;
  items: {
    productId: number;
    quantity: number;
    options?: SelectedOption[];
  }[];
}

/** POST /api/orders */
export interface CreateOrderRequest {
  restaurantId: number;
  orderType: OrderType;
  items: {
    productId: number;
    quantity: number;
    options?: SelectedOption[];
  }[];
  couponCode?: string;
}