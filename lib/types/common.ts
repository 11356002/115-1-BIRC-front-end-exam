type DiscountType = 'FIXED' | 'PERCENT';

type OrderType = 'TAKEOUT' | 'DINE_IN';

type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PREPARING'
  | 'READY'
  | 'COMPLETED'
  | 'CANCELLED';

type ApiErrorCode =
  | 'VALIDATION_ERROR'
  | 'RESTAURANT_NOT_FOUND'
  | 'RESTAURANT_CLOSED'
  | 'PRODUCT_NOT_FOUND'
  | 'PRODUCT_OUT_OF_STOCK'
  | 'INVALID_OPTION'
  | 'CART_ITEM_NOT_FOUND'
  | 'CART_RESTAURANT_MISMATCH'
  | 'INVALID_COUPON'
  | 'ORDER_NOT_FOUND'
  | 'ORDER_CREATE_FAILED'
  | 'INTERNAL_ERROR';

interface ApiErrorBody {
  code: ApiErrorCode;
  message: string;
}

/** 選擇的客製化選項（Request 使用） */
interface SelectedOption {
  optionId: number;
  choiceIds: number[];
}