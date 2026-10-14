
import API from "@/lib/api/api";
import type { Coupon, CouponValidation } from "@/lib/types/couponType";
import type { ValidateCouponRequest } from "@/lib/types/requestAPI";

const BASE_URL = "/coupons";

const couponAPI = {
  getCoupons: (restaurantId?: number): Promise<Coupon[]> =>
    API.get(BASE_URL, {
      params: restaurantId === undefined ? undefined : { restaurantId },
    }).then((res) => res.data),

  validateCoupon: (data: ValidateCouponRequest): Promise<CouponValidation> =>
    API.post(`${BASE_URL}/validate`, data).then((res) => res.data),
};

export default couponAPI;
