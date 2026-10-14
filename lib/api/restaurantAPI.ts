
import API from "@/lib/api/api";
import type { Restaurant, Menu } from "@/lib/types/restaurantType";

const BASE_URL = "/restaurants";

const restaurantAPI = {
  getRestaurants: (): Promise<Restaurant[]> =>
    API.get(BASE_URL).then((res) => res.data),

  getMenu: (restaurantId: number): Promise<Menu> =>
    API.get(`${BASE_URL}/${restaurantId}/menu`).then((res) => res.data),
};

export default restaurantAPI;
