
import API from "@/lib/api/api";
import type {
  CreatedOrder,
  OrderSummary,
  OrderDetail,
} from "@/lib/types/orderType";
import type { CreateOrderRequest } from "@/lib/types/requestAPI";

const BASE_URL = "/orders";

const orderAPI = {
  createOrder: (data: CreateOrderRequest): Promise<CreatedOrder> =>
    API.post(BASE_URL, data).then((res) => res.data),

  getOrders: (): Promise<OrderSummary[]> =>
    API.get(BASE_URL).then((res) => res.data),

  getOrder: (orderId: string): Promise<OrderDetail> =>
    API.get(`${BASE_URL}/${orderId}`).then((res) => res.data),
};

export default orderAPI;
