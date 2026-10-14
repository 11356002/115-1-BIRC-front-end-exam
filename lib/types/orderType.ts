/** POST /api/orders → CreatedOrder */
export interface CreatedOrder {
  orderId: string;
  status: OrderStatus;
  total: number;
  createdAt: string;
}

/** GET /api/orders → OrderSummary[] */
export interface OrderSummary {
  orderId: string;
  restaurantName: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

/** GET /api/orders/:orderId → OrderDetail */
export interface OrderDetail {
  orderId: string;
  restaurantName: string;
  orderType: OrderType;
  items: OrderDetailItem[];
  subtotal: number;
  discount: number;
  total: number;
  status: OrderStatus;
  estimatedReadyTime: string | null;
}

export interface OrderDetailItem {
  productName: string;
  quantity: number;
  price: number;
  options: string[];
}