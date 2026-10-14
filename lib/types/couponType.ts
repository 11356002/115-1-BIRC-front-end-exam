/** GET /api/coupons → Coupon[] */
export interface Coupon {
  id: string;
  name: string;
  discountType: DiscountType;
  discount: number;
  minimumAmount: number;
  expiredAt: string;
}

/** POST /api/coupons/validate → CouponValidation */
export interface CouponValidation {
  valid: boolean;
  discount: number;
  message: string;
}