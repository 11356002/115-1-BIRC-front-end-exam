
import API from "@/lib/api/api";
import type { Cart } from "@/lib/types/cartType";
import type {
  AddCartItemRequest,
  UpdateCartItemRequest,
} from "@/lib/types/requestAPI";

const BASE_URL = "/cart";

const cartAPI = {
  getCart: (): Promise<Cart> =>
    API.get(BASE_URL).then((res) => res.data),

  addItem: (data: AddCartItemRequest): Promise<Cart> =>
    API.post(`${BASE_URL}/items`, data).then((res) => res.data),

  updateItem: (
    itemId: number,
    data: UpdateCartItemRequest
  ): Promise<Cart> =>
    API.patch(`${BASE_URL}/items/${itemId}`, data).then((res) => res.data),

  removeItem: (itemId: number): Promise<Cart> =>
    API.delete(`${BASE_URL}/items/${itemId}`).then((res) => res.data),
};

export default cartAPI;
