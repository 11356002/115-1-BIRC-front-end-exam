
import API from "@/lib/api/api";
import type { Product } from "@/lib/types/productType";

const BASE_URL = "/products";

const productAPI = {
  getProduct: (productId: number): Promise<Product> =>
    API.get(`${BASE_URL}/${productId}`).then((res) => res.data),
};

export default productAPI;
